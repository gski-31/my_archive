#!/usr/bin/env node

const assert = require('assert');
const getConfig = require('../config').getConfig;
const { createContentBlock } = require('../lib/braze-api');

const [, , env, fn] = process.argv;

const config = getConfig(env);
assert(config, `invalid env ${env}`);

return createContentBlock(config, fn);
