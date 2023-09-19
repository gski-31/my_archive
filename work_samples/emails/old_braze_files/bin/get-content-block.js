#!/usr/bin/env node

const util = require('util');
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const writeFile = util.promisify(fs.writeFile);

const getConfig = require('../config').getConfig;
const { getContentBlockByName } = require('../lib/braze-api');

const [, , env, name] = process.argv;

const getFn = name =>
  path.join(__dirname, '..', 'content-blocks', `${name}.liquid`);

const config = getConfig(env);
assert(config, `invalid env ${env}`);

return getContentBlockByName(config, name)
  .then(block => writeFile(getFn(name), block.content))
  .then(() => console.log('Wrote file:', getFn(name)));
