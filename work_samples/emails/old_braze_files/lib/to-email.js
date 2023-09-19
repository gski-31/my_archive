const { cleanContent } = require('./clean-content');

const emailHeader = (from = 'nobody@waybetter.com', to, subject) => {
  if (!to) throw new Error("Missing 'to' email");

  return cleanContent(`From: ${from}
To: "Coquito Recipient" <${to}>
Subject: ${subject || 'Coquito Test'}
Content-Type: text/html`);
};

module.exports.toEmail = (from, to, subject, body) => {
  const header = emailHeader(from, to, subject);
  return [header, body].join('\n') + '\n';
};
