const Liquid = require('liquid');

class AbortMessage extends Liquid.Tag {
  constructor(template, tagName, message) {
    super(template, tagName);
    this.message = message || 'No message';
  }

  render() {
    throw new Error(this.message);
    //return `<strong style="color: red;">abort_message: ${this.message}</strong>`;
  }
}

module.exports.AbortMessage = AbortMessage;
