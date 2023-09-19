#!/usr/bin/env node

const assert = require('assert');
const getConfig = require('../config').getConfig;
const { exportAllContentBlocks } = require('../lib/braze-api');

const [, , env] = process.argv;

const config = getConfig(env);
assert(config, `invalid env ${env}`);

return exportAllContentBlocks(config);
