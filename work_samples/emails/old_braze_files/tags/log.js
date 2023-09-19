const Liquid = require('liquid');

function isPromise(value) {
  return Boolean(value && typeof value.then === 'function');
}

class Log extends Liquid.Tag {
  constructor(template, tagName, varName) {
    super(template, tagName, varName);
    this.varName = varName;
  }

  render(context) {
    // console.log('lastScope:', context.lastScope());

    if (this.varName) {
      const value = context.resolve(this.varName);

      if (isPromise(value)) {
        value.then(resolved => console.log('Log: ', this.varName, resolved));
      } else {
        console.log('Log: ', this.varName, value);
      }
    } else {
      console.log('Log: no variable specified!');
    }

    return '';
  }
}

module.exports.Log = Log;
