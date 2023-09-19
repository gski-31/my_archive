#!/usr/bin/env node

const axios = require('axios').default;
const chalk = require('chalk');
const util = require('util');
const fs = require('fs');
const path = require('path');
const assert = require('assert');

const Diff = require('diff');
const inquirer = require('inquirer');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const BRAZE_ENDPOINT_URL = 'https://rest.iad-01.braze.com';

const getLiquidName = fn => path.basename(fn, '.liquid');

const readLiquidFile = fn => readFile(fn, { encoding: 'utf-8' });

const getUrl = path => `${BRAZE_ENDPOINT_URL}${path}`;

const getHeaders = apiKey => ({
  Authorization: `Bearer ${apiKey}`,
  'Content-Type': 'application/json',
});

const handleError = error => {
  if (error.response) {
    console.log(
      'Received error from API call:',
      error.response.status,
      error.response.data
    );
  } else {
    console.log('Error making API call:', error);
  }
};

const post = async (config, fn, urlPath, body) => {
  assert(config, 'missing config');
  assert(fn, 'missing fn');

  const apiKey = config.brazeApiKey;
  assert(apiKey, 'missing brazeApiKey');

  const url = getUrl(urlPath);
  const headers = getHeaders(apiKey);

  try {
    const response = await axios.post(url, body, { headers });
    console.log('Status:', response.status);
    console.log(
      'id:',
      response.data ? response.data.content_block_id : undefined
    );
    console.log('message:', response.data ? response.data.message : undefined);
  } catch (error) {
    handleError(error);
  }
};

module.exports.createContentBlock = async (config, fn) => {
  const content = await readLiquidFile(fn);

  const body = {
    name: getLiquidName(fn),
    content,
    state: 'active',
  };

  return post(config, fn, '/content_blocks/create', body);
};

const selectContentBlockByName = (name, blocks) =>
  blocks.filter(block => block.name == name)[0];

const getContentBlocks = async (config, offset = 0, limit = 100) => {
  assert(config, 'missing config');
  const apiKey = config.brazeApiKey;
  assert(apiKey, 'missing brazeApiKey');

  const url = getUrl('/content_blocks/list');
  const records = [];
  let last = false;
  let currOffset = offset;

  try {
    do {
      const response = await axios.get(url, {
        headers: getHeaders(apiKey),
        params: { offset: currOffset || null, limit },
      });
      currOffset += response.data?.count || 0;
      console.log('Status:', response.status);
      console.log(
        'message:',
        response.data ? response.data.message : undefined
      );
      console.log('count:', response.data ? response.data.count : undefined);

      records.push(...(response.data ? response.data.content_blocks : []));
      last = response.data?.count < limit;
    } while (!last);
    return records;
  } catch (error) {
    handleError(error);
  }
};
module.exports.getContentBlocks = getContentBlocks;

const getContentBlock = async (config, id) => {
  assert(id, 'missing id');
  assert(config, 'missing config');
  const apiKey = config.brazeApiKey;
  assert(apiKey, 'missing brazeApiKey');

  const url = getUrl('/content_blocks/info');

  try {
    const response = await axios.get(url, {
      headers: getHeaders(apiKey),
      params: { content_block_id: id },
    });
    console.log('Status:', response.status);
    console.log('id:', response.data.content_block_id);
    console.log('message:', response.data.message);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
module.exports.getContentBlock = getContentBlock;

const getContentBlockByName = async (config, name) => {
  const blocks = await getContentBlocks(config);
  const summary = selectContentBlockByName(name, blocks);
  if (!summary || !summary.content_block_id) {
    throw new Error(`No block found for name ${name}`);
  }
  console.log(`id for block ${name}: ${summary.content_block_id}`);
  const block = getContentBlock(config, summary.content_block_id);
  if (!block) {
    throw new Error(`No block found for id ${summary.content_block_id}`);
  }
  return block;
};
module.exports.getContentBlockByName = getContentBlockByName;

const printDiff = (remote, local) => {
  assert(remote, 'missing remote');
  assert(local, 'missing local');

  const printLine = (start, offset, content) => {
    process.stdout.write(`[${start}-${start + offset}]\n${content}`);
    if (!content.match(/\n/m)) process.stdout.write(`⛔️⏎\n`);
  };

  console.log('Compare remote with local:\n---------------------------');
  const diff = Diff.diffLines(remote, local);

  let count = 1;
  diff.forEach(part => {
    let chunk;
    // green for additions, red for deletions, grey for common parts
    if (part.added || part.removed) {
      const colorFn = part.added ? chalk.green : chalk.red;
      printLine(count, part.count, colorFn(part.value));
    } else {
      const lines = part.value.split(/\n/);
      if (lines.length > 10) {
        chunk =
          chalk.gray(lines.slice(0, 3).join('\n')) +
          chalk.cyan('\n' + ' \u{2704}'.repeat(30) + '\n') +
          chalk.gray(lines.slice(lines.length - 3).join('\n'));

        if (part.value.match(/\n/m)) chunk = chunk + '\n';
      } else {
        chunk = chalk.gray(part.value);
      }
      printLine(count, part.count, chunk);
    }

    count += part.count;
  });
  console.log();
};

module.exports.exportAllContentBlocks = async config => {
  const blocks = await getContentBlocks(config);
  for (const summary of blocks) {
    const block = await getContentBlock(config, summary.content_block_id);
    const fn = path.join(
      __dirname,
      '..',
      'content-blocks',
      `${block.name}.liquid`
    );
    console.log(`saving ${block.name} to ${fn}`);
    await writeFile(fn, block.content);
  }
};

module.exports.updateContentBlock = async (config, fn, verify) => {
  const name = getLiquidName(fn);

  const content = await readLiquidFile(fn);
  const remoteCopy = await getContentBlockByName(config, name);

  if (content === remoteCopy.content) {
    throw new Error('Remote and local content are equal. Nothing to update.');
  }

  if (verify) {
    printDiff(remoteCopy.content, content);

    const answer = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirm',
        message: `Update remote copy of ${name}?`,
        default: false,
      },
    ]);

    if (!answer.confirm) {
      console.log('User canceled');
      return;
    }
  }

  const body = {
    content_block_id: remoteCopy.content_block_id,
    name,
    content,
    state: 'active',
  };

  return post(config, fn, '/content_blocks/update', body);
};

const selectEmailTemplateByName = (name, templates) =>
  templates.filter(template => template.template_name == name)[0];

const getEmailTemplates = async config => {
  assert(config, 'missing config');
  const apiKey = config.brazeApiKey;
  assert(apiKey, 'missing brazeApiKey');

  const url = getUrl('/templates/email/list');

  try {
    const response = await axios.get(url, { headers: getHeaders(apiKey) });
    console.log('Status:', response.status);
    console.log('message:', response.data ? response.data.message : undefined);
    console.log('count:', response.data ? response.data.count : undefined);
    return response.data ? response.data.templates : [];
  } catch (error) {
    handleError(error);
  }
};
module.exports.getEmailTemplates = getEmailTemplates;

// TODO: only supports up to 100, need to add pagination
const getEmailTemplateByName = async (config, name) => {
  const templates = await getEmailTemplates(config);
  const summary = selectEmailTemplateByName(name, templates);
  if (!summary || !summary.email_template_id) {
    throw new Error(`No email template found for name ${name}`);
  }
  console.log(`id for email template ${name}: ${summary.email_template_id}`);
  const template = getEmailTemplate(config, summary.email_template_id);
  if (!template) {
    throw new Error(
      `No email template found for id ${summary.email_template_id}`
    );
  }
  return template;
};
module.exports.getEmailTemplateByName = getEmailTemplateByName;

const getEmailTemplate = async (config, id) => {
  assert(id, 'missing id');
  assert(config, 'missing config');
  const apiKey = config.brazeApiKey;
  assert(apiKey, 'missing brazeApiKey');

  const url = getUrl('/templates/email/info');

  try {
    const response = await axios.get(url, {
      headers: getHeaders(apiKey),
      params: { email_template_id: id },
    });
    console.log('Status:', response.status);
    console.log('id:', response.data.email_template_id);
    console.log('message:', response.data.message);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
module.exports.getEmailTemplate = getEmailTemplate;

module.exports.createEmailTemplate = async (config, fn, name, subject) => {
  assert(name, 'missing email template name');
  assert(subject, 'missing email template subject');

  const content = await readLiquidFile(fn);

  const body = {
    template_name: name,
    subject,
    body: content,
  };

  return post(config, fn, '/templates/email/create', body);
};

module.exports.updateEmailTemplate = async (config, fn, name, verify) => {
  assert(name, 'missing email template name');

  const content = await readLiquidFile(fn);
  const remoteCopy = await getEmailTemplateByName(config, name);

  if (content === remoteCopy.body) {
    throw new Error('Remote and local content are equal. Nothing to update.');
  }

  if (verify) {
    printDiff(remoteCopy.body, content);

    const answer = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirm',
        message: `Update remote copy of ${name}?`,
        default: false,
      },
    ]);

    if (!answer.confirm) {
      console.log('User canceled');
      return;
    }
  }

  const body = {
    email_template_id: remoteCopy.email_template_id,
    template_name: name,
    body: content,
  };

  return post(config, fn, '/templates/email/update', body);
};
