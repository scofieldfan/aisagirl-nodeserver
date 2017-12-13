const Base = require('./base.js');
const girls = require('./girl.js');
module.exports = class extends Base {
  indexAction() {
    return this.display();
  }
  testAction() {
    // this.body = 'hello world!' + this.ctx.request.href;
    this.ctx.json(girls);
  }
};
