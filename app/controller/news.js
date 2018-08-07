const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const page = this.ctx.query.page || 1;
    // const newslist = await this.ctx.server.news.list(page);
    const newslist = {
      list: [
        {id: 1, title: 'this is news1', url: '/news/1'},
        {id: 2, title: 'this is news2', url: '/news/2'}
      ]
    }
    await this.ctx.render('news/home.ejs', { list: newslist.list })
  }
}

module.exports = NewsController;
