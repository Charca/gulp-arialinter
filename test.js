var arialinter = require('./index');
var gutil = require('gulp-util');
var es = require('event-stream');
var expect = require('chai').expect;
var Stream = require('stream');

describe('gulp-arialinter', function() {
  it('should let null files pass through', function(done) {
    var stream = arialinter();
    var count = 0;
    
    stream.pipe(es.through(function(file) {
      expect(file.path).to.equal('hello.html');
      expect(file.contents).to.equal(null);
      count += 1;
    }, function() {
      expect(count).to.equal(1);
      done();
    }));
    
    stream.write(new gutil.File({
      path: 'hello.html',
      contents: null
    }));
    
    stream.end();
  });
  
  it('should fail on stream mode', function(done) {
    var stream = arialinter();
    
    stream.on('error', function(error) {
      expect(error.message).to.equal('Streams not supported');
      done();
    });
    
    stream.write(new gutil.File({
      path: 'hello.html',
      contents: new Stream()
    }));
    
    stream.end();
  });
});