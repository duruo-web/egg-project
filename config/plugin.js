'use strict';

// had enabled by egg
// exports.static = true;开启插件
const path = require('path');
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
};

exports.ua = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-ua')
}