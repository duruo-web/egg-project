'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1540542086084_4873';

  // add your config here
  config.middleware = [];

  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  }
  exports.middleware = [
    'robot',
  ]
  exports.robot = {
    ua: [
      /Baiduspider/i,
    ]
  }
  return config;
};
