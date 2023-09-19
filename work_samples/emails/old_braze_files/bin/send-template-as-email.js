#!/usr/bin/env node

const child_process = require('child_process');
const stream = require('stream');
const util = require('util');
const { renderTemplate } = require('../lib/render-template');
const { toEmail } = require('../lib/to-email');

const execFile = util.promisify(child_process.execFile);

const runCommandWithPipedInput = async (input, command, args) => {
  const promise = execFile(command, args);
  const child = promise.child;

  // Pipe input to command
  const stdinStream = new stream.Readable();
  stdinStream.push(input);
  stdinStream.push(null); // Signals the end of the stream (EOF)
  stdinStream.pipe(child.stdin);

  child.on('close', function(code) {
    console.log('Program exited with code: ' + code);
  });

  const result = await promise;
  return result;
};

/**
 * Sends a template to the specified email address,
 * via sendmail.
 * See {@link https://medium.com/better-programming/how-to-send-mail-from-the-macos-terminal-dad1756b166f| for how to set it up on MacOS}.
 */
const sendTemplateAsEmail = async ({ name, to, subject }) => {
  if (!to) {
    console.warn(
      `Missing recipient. Usage: ${process.argv[1]} <template_name> <to> [subject]`
    );
    process.exit(1);
  }
  const body = await renderTemplate(name, true);
  const email = toEmail(null, to, subject, body);

  try {
    const result = await runCommandWithPipedInput(email, 'sendmail', ['-t']);
    console.log('result', result);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const [, , name, to, subject] = process.argv;

return sendTemplateAsEmail({ name, to, subject });
