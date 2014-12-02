var gulp = require('gulp');
var arialinter = require('./index');

gulp.task('default', function() {
  gulp.src('examples/**/*.html')
    .pipe(arialinter({
      level: 'AA'
    }))
    .pipe(gulp.dest('dist'));
});
