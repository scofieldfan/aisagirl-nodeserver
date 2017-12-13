const Base = require('./base.js');
module.exports = class extends Base {
  indexAction(){
    const ip = this.ctx.ip;
    this.body = 'hello world!';
  }
}