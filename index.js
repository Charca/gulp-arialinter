var through = require('through2');
var gutil = require('gulp-util');
var arialinter = require('arialinter');
var PluginError = gutil.PluginError;

// consts
const PLUGIN_NAME = 'gulp-arialinter';

module.exports = function (options) {
  var stream = through.obj(function(file, enc, callback) {
    console.log(file);
    console.log(file.isBuffer());
    console.log('---');

    this.push(file);
    callback();
  });

  return stream;
};
