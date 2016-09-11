'use strict';

var each = require('async-each');
var contributors = require('github-contributors');
var stringify = require('stringify-author');
var GitHub = require('github-base');

module.exports = function(app) {
  var github;
  var auth;

  app.task('authenticate', function(cb) {
    auth = {
      username: app.options.username || app.options.u,
      password: app.options.password || app.options.p
    };

    github = new GitHub(auth);
    cb();
  });

  app.task('default', ['authenticate'], function(cb) {
    var data = app.pkg.expand();

    contributors(data.repo, auth, function(err, arr) {
      if (err) return cb(err);

      if (!Array.isArray(arr) || arr.length <= 1) {
        cb();
        return;
      }

      users(arr, function(err, contributors) {
        if (err) return cb(err);
        app.pkg.set('contributors', contributors);
        app.pkg.save();
        cb();
      });
    });
  });

  function users(arr, cb) {
    var acc = [];

    each(arr, function(user, next) {
      if (!user || !user.login) {
        next(null, acc);
        return;
      }

      github.get('/users/' + user.login, function(err, res) {
        if (err) return next(err);

        var contributor = { name: res.name };
        var url = res.blog || res.html_url;
        if (res.email) contributor.email = res.email;
        if (url) contributor.url = url;
        next(null, stringify(contributor));
      });
    }, cb);
  }
};
