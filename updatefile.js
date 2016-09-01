'use strict';

var contributors = require('github-contributors');
var stringify = require('stringify-author');
var reduce = require('async-array-reduce');
var GitHub = require('github-base');

module.exports = function(app) {
  var github;

  app.task('authenticate', function(cb) {
    github = new GitHub();
    // todo
    cb();
  });

  app.task('default', ['authenticate'], function(cb) {
    var data = app.pkg.expand();

    contributors(data.repo, function(err, arr) {
      if (err) return cb(err);

      if (!Array.isArray(arr) || arr.length === 1) {
        cb();
        return;
      }
      users(arr, function(err, res) {
        if (err) return cb(err);
        app.pkg.set('contributors', res);
        app.pkg.save();
        cb();
      });
    });
  });

  function users(arr, cb) {
    reduce(arr, [], function(acc, user, next) {
      github.get(`/users/${user.login}`, function(err, res) {
        if (err) return next(err);
        var contributor = {name: res.name};
        var url = res.blog || res.html_url
        var email = res.email;
        if (email) contributor.email = email;
        if (url) contributor.url = url;
        acc.push(stringify(contributor));
        next(null, acc);
      });
    }, cb);
  }
};

