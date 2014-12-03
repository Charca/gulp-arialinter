var _ = require('underscore');
var through = require('through2');
var arialinter = require('arialinter');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

// consts
const PLUGIN_NAME = 'gulp-arialinter';

module.exports = function (options) {
  var defaults = {
    level: 'A',
    templates: true,
    rules: {}
  };

  options = _.extend(defaults, options);

  if (options.templates === true) {
    options.template = true;
    delete options.templates;
  }

  var stream = through.obj(function(file, enc, callback) {
    var that = this;
    
    if(file.isNull()) {
      that.push(file);
      return callback();
    }

    if(file.isStream()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Streams not supported'));
      return callback();
    }

    if(file.isBuffer()) {
      arialinter.initialize(file.path, function() {

        if(!arialinter.evaluate(options)) {
          gutil.log(PLUGIN_NAME, arialinter.getReport('text', file.path));
        }

        that.push(file);
        callback();
      });
    }
  });

  return stream;
};
