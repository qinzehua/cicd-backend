const { Controller } = require('egg');
class BaseController extends Controller {
  get user() {
    return this.ctx.session.user;
  }

  success(data) {
    this.ctx.body = {
      message:'ok2',
      success: true,
      code: 200,
      data
    };
  }

  notFound(message) {
    this.ctx.body = {
      success: false,
      code: 404,
      message
    };
  }

  faild(message) {
    this.ctx.body = {
      success: false,
      code: 403,
      message
    };
  }
}
module.exports = BaseController;
