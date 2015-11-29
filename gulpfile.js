const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');


gulp.task('js', () => {
    return gulp.src([
      '**/*.es6',
      '**/*.jsx'
    ])
        .pipe(plumber())
        .pipe(babel({
            presets: ['es2015', "react"]
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['js']);

gulp.task('watch', () => {
    var watcher = gulp.watch([
      '**/*.es6',
      '**/*.jsx'
    ], ['js']);
});
