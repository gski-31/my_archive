#!/usr/bin/env node

const assert = require('assert');

const { getConfig } = require('../config');
const { getFileMeta } = require('../lib/get-file-meta');
const { updateEmailTemplate } = require('../lib/braze-api');

const _updateEmailTemplate = async () => {
  const [, , env, fn, nameFromCli] = process.argv;

  let name = nameFromCli;
  if (!name) {
    const meta = await getFileMeta(fn);
    name = meta.name;
  }

  const config = getConfig(env);
  assert(config, `invalid env ${env}`);

  return updateEmailTemplate(config, fn, name, true);
};

return _updateEmailTemplate();
