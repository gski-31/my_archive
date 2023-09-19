const { readFileSync } = require('fs');
const { join } = require('path');

const MATCHER = new RegExp('\\{\\{content_blocks.\\$\\{([^}]+)\\}\\}\\}', 'g');

const contentBlockFn = (name, pathPrefix) =>
  join(pathPrefix, '..', 'content-blocks', `${name}.liquid`);

const readContentBlock = fn => readFileSync(fn, { encoding: 'utf-8' });

const injectContentBlocks = (content, pathPrefix, stack = []) => {
  return content.replace(MATCHER, (match, $1) => {
    try {
      // first is email template, subsequent are content blocks
      if (stack.length > 2) {
        const error = `Cannot nest content blocks more than one level. Block trace:\n ${[
          $1,
        ]
          .concat(stack.reverse())
          .join('\n ⮑  ')}`;
        console.error(error);
        return `<strong>${error}</strong>`;
      }
      const block = injectContentBlocks(
        readContentBlock(contentBlockFn($1, pathPrefix)),
        pathPrefix,
        stack.concat($1)
      );
      return block;
    } catch (error) {
      console.error(`could not inject content block ${$1}`, error);
      return match;
    }
  });
};

module.exports.injectContentBlocks = injectContentBlocks;
