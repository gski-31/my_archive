const fs = require('fs');
const util = require('util');

const fileExists = util.promisify(fs.exists);
const readFile = util.promisify(fs.readFile);

const getFileMeta = async templateFn => {
  const metaFn = templateFn.replace(/^(.+)\.liquid/, '$1.meta.json');
  const exists = await fileExists(metaFn);
  if (!exists) return {};
  const contents = await readFile(metaFn, { encoding: 'utf-8' });
  return JSON.parse(contents);
};

module.exports.getFileMeta = getFileMeta;
