#!/usr/bin/env node

const assert = require('assert');

const { getConfig } = require('../config');
const { getFileMeta } = require('../lib/get-file-meta');
const { createEmailTemplate } = require('../lib/braze-api');

const _createEmailTemplate = async () => {
  const [, , env, fn, nameFromCli, subjectFromCli] = process.argv;
  const meta = await getFileMeta(fn);

  let name = nameFromCli;
  if (!name || name === '-') {
    name = meta.name;
  }

  let subject = subjectFromCli;
  if (!subject || subject === '-') {
    subject = meta.subject;
  }

  const config = getConfig(env);
  assert(config, `invalid env ${env}`);

  return createEmailTemplate(config, fn, name, subject);
};

return _createEmailTemplate();
