const path = require('path');
const { injectContentBlocks } = require('../inject-content-blocks');

test('injection', () => {
  const content = 'before {{content_blocks.${test-block-1}}} after';
  const injected = injectContentBlocks(
    content,
    path.join(__dirname, 'content-blocks')
  );
  expect(injected).toEqual('before cb after');
});
