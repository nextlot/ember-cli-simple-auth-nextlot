/* jshint node: true */
'use strict';

var path = require('path');
var fs   = require('fs');
var mergeTrees = require('broccoli-merge-trees');
var unwatchedTree = require('./lib/unwatched-tree')


module.exports = {
  name: 'ember-simple-auth-nextlot',
  config: function() {
    return {
      "simple-auth": {
        authorizer: 'simple-auth-authorizer:nextlot',
        crossOriginWhitelist: ['http://nextlot.lvh.me:3000',
        'https://nextlot.lvh.me:3000',
        'http://staging.nextlot.com',
        'https://staging.nextlot.com',
        'http://api.nextlot.com',
        'https://api.nextlot.com']
      }
    };
  },
  treeFor: function (name) {
    var treePath =  path.join('node_modules', 'ember-cli-simple-auth-nextlot', name + '-addon');
    if (fs.existsSync(treePath)) {
      return unwatchedTree(treePath);
    }
  },
  included: function (app) {
  }
};
