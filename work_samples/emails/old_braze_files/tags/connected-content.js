const Liquid = require('liquid');
const axios = require('axios').default;
const util = require('util');
const fs = require('fs');

const Cache = require('async-disk-cache');
const cache = new Cache('conquito-connected-content');

const stat = util.promisify(fs.stat);
const fileExists = util.promisify(fs.exists);

const axiosError = require('@waybetter/wb-error-node').axios;

const getConfig = require('../config').getConfig;

/**
 * Cache content for longer than specified by markup, as it's not as important to
 * have fresh content while developing templates, content blocks, etc.
 */
const CACHE_MULTIPLIER = 10;

// {% connected_content https://www.dietbet.com/api/game-service/games/{{game_id}} :save game :cache 3600 %}
class ConnectedContent extends Liquid.Tag {
  constructor(template, tagName, markup, tokens) {
    super(template, tagName, markup, tokens);

    const argsArray = markup.split(/\s+/);

    this.url = argsArray.shift();
    if (!this.url) {
      throw new Liquid.SyntaxError('missing url');
    }

    const args = this.parseArgsArray(argsArray);
    this.targetVar = args[':save'];
    this.cache = (args[':cache'] || 60 * 60 * 24) * CACHE_MULTIPLIER;

    if (args[':basic_auth']) {
      const config = getConfig(process.env.COQUITO_BRAZE_ENV || 'prod');
      if (
        config.brazeConnectedContentUsername &&
        config.brazeConnectedContentPassword
      ) {
        this.auth = {
          username: config.brazeConnectedContentUsername,
          password: config.brazeConnectedContentPassword,
        };
      } else {
        const { BRAZE_AUTH_USERNAME, BRAZE_AUTH_PASSWORD } = process.env;
        this.auth = {
          username: BRAZE_AUTH_USERNAME,
          password: BRAZE_AUTH_PASSWORD,
        };
      }

      if (!this.auth.username || !this.auth.password)
        throw new Error(
          ':basic_auth found in connected content, but credentials not found in config nor environment'
        );
    }
  }

  parseArgsArray(argsArray) {
    const args = {};
    for (var i = 0; i < argsArray.length; i += 2) {
      const k = argsArray[i];
      const v = argsArray[i + 1];
      if (k && k !== '') args[k] = v;
    }
    return args;
  }

  cacheResponse(url, data) {
    return cache.set(url, JSON.stringify(data));
  }

  async isCacheEntryExpired(url) {
    const path = await cache.pathFor(url);
    const exists = await fileExists(path);
    if (exists) {
      const mtime = (await stat(path)).mtime;
      const expiryDate = new Date(mtime.getTime() + this.cache * 1000);
      return Date.now() > expiryDate;
    }
    return false;
  }

  async fromCache(url) {
    try {
      if (await this.isCacheEntryExpired(url)) {
        await cache.remove(url);
      } else {
        const cacheEntry = await cache.get(url);
        if (cacheEntry.isCached) {
          return JSON.parse(cacheEntry.value);
        }
      }
    } catch (err) {
      console.log('Error retrieving url response data from cache', url, err);
    }
  }

  async render(context) {
    try {
      const parsedUrlTemplate = await this.template.engine.parse(this.url);
      const parsedUrl = await parsedUrlTemplate.render(context);

      let data = await this.fromCache(parsedUrl);

      if (!data) {
        const response = await axios.get(
          parsedUrl,
          this.auth ? { auth: this.auth } : null
        );
        data = response.data;
        await this.cacheResponse(parsedUrl, data);
      }

      context.lastScope()[this.targetVar] = data;
      return super.render(context);
    } catch (error) {
      const loggedError = axiosError.isAxiosError(error)
        ? axiosError.parseError(error)
        : error;
      console.log(
        'Error fetching connected content!',
        error.message,
        loggedError
      );
      context.lastScope()[this.targetVar] = null;
      return super.render(context);
    }
  }
}

module.exports.ConnectedContent = ConnectedContent;
