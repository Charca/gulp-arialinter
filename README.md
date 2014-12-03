# gulp-arialinter

Gulp plugin for the accessibility tool [AriaLinter](https://github.com/globant-ui/arialinter)

[![Build Status](https://travis-ci.org/Charca/gulp-arialinter.svg?branch=master)](https://travis-ci.org/Charca/gulp-arialinter)

## Install

Install with [npm](https://npmjs.org/package/gulp-arialinter)

```
npm install gulp-arialinter --save-dev
```


## Example

```js
var gulp = require('gulp');
var arialinter = require('gulp-arialinter');

gulp.task('default', function () {
	gulp.src('examples/**/*.html')
      .pipe(arialinter({
        level: 'AA'
      }))
      .pipe(gulp.dest('dist'));
});
```


## API

### arialinter(options)

See the arialinter [options](https://github.com/globant-ui/arialinter).

## License

MIT [@Charca](http://github.com/Charca)