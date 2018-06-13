'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1528768283475_1991';

  // add your config here
  config.middleware = [];

  config.view = {
      defaultViewEngine: 'ejs',
      mapping: {
          '.ejs': 'ejs',
      },
  };
  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  return config;
};
