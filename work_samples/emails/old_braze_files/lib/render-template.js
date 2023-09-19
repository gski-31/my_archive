const Liquid = require('liquid');
const fs = require('fs');
const juice = require('juice');
const path = require('path');
const util = require('util');

const { cleanContent } = require('./clean-content');
const { injectContentBlocks } = require('./inject-content-blocks');
const {
  processBrazePersonalizationVars,
} = require('./process-braze-personalization-vars');

const getConfig = require('../config').getConfig;
const { AbortMessage } = require('../tags/abort-message');
const { ConnectedContent } = require('../tags/connected-content');
const { Log } = require('../tags/log');
const { urlParamEscape } = require('../filters/url-param-escape');
const { slice } = require('../filters/slice');

const engine = new Liquid.Engine();
engine.registerTag('abort_message', AbortMessage);
engine.registerTag('connected_content', ConnectedContent);
engine.registerTag('log', Log);
engine.registerFilters({ slice, url_param_escape: urlParamEscape });

const config = getConfig(process.env.COQUITO_BRAZE_ENV || 'prod');

const readFile = util.promisify(fs.readFile);

const templateFn = (name, pathPrefix) =>
  path.join(pathPrefix, '..', 'templates', `${name}.liquid`);

module.exports.renderTemplate = async (name, inlineCss) => {
  const template = await readFile(templateFn(name, __dirname), {
    encoding: 'utf-8',
  });
  const injected = injectContentBlocks(template, __dirname);
  const processed = processBrazePersonalizationVars(
    injected,
    config.brazePersonalizationVars
  );
  try {
    const result = await engine.parseAndRender(processed, {
      name: 'test-name',
    });
    return inlineCss ? cleanContent(juice(result)) : cleanContent(result);
  } catch (error) {
    console.log('error with template:', name, error);
    return `<strong>Error with template ${name}:<br/>${error.message}</strong>`;
  }
};
