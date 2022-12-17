const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function (cb) {
    console.log('Consruyendo el sitio');
    setTimeout(cb, 1200)
});


gulp.task('serve', function (cb) {
    gulp.src('WWW').pipe(server({
        livereload: true,
        open: true,
    }));
});