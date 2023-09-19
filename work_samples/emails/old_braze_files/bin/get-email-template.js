#!/usr/bin/env node

const util = require('util');
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const writeFile = util.promisify(fs.writeFile);

const getConfig = require('../config').getConfig;
const { getEmailTemplateByName } = require('../lib/braze-api');

const [, , env, remoteName, localName] = process.argv;

const getFn = name => path.join(__dirname, '..', 'templates', `${name}.liquid`);

const config = getConfig(env);
assert(config, `invalid env ${env}`);

const localFn = getFn(localName || remoteName);

return getEmailTemplateByName(config, remoteName)
  .then(block => writeFile(localFn, block.body))
  .then(() => console.log('Wrote file:', localFn));
