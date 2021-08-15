'use strict';

const Controller = require('../core/base_controller');

class UserController extends Controller {
  async list() {
    const { app } = this;
    const data = await app.mysql.select('users');
    if (data) {
      this.success(data);
    } else {
      this.notFound('没有找到数据')
    }
  }

  async editById() {
    const { ctx, app } = this;
    const {id} = ctx.params;
    const result = await app.mysql.update('users', ctx.request.body, {
      where: {
        id
      }
    });
    const updateSuccess = result.affectedRows === 1;
    if (updateSuccess) {
      this.success(updateSuccess);
    } else {
      this.faild('更新失败')
    }
  }

  async create() {
    const { ctx, app } = this;
    const result = await app.mysql.insert('users', ctx.request.body);
    const updateSuccess = result.affectedRows === 1;
    if (updateSuccess) {
      this.success(updateSuccess);
    } else {
      this.faild('创建失败')
    }
  }

  async deleteById() {
    const { ctx, app } = this;
    const {id} = ctx.params;
    const result = await app.mysql.delete('users', {id});
    if (result) {
      this.success('删除成功');
    } else {
      this.faild('删除失败')
    }
  }
}

module.exports = UserController;
