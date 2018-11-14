const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const newslist = await this.ctx.service.news.list(1);
    await this.ctx.render('news/list.tpl', { list: newslist});
  }
}
  module.exports = NewsController;