const { promisify } = require('util');
const fs = require('fs');
const { join } = require('path');

const readdir = promisify(fs.readdir);

const templateDir = pathPrefix => join(pathPrefix, 'templates');

module.exports.templateList = async pathPrefix => {
  const items = await readdir(templateDir(pathPrefix));
  return items
    .filter(item => item.endsWith('.liquid'))
    .map(item => item.replace('.liquid', ''));
};
