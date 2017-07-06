var gulp = require('gulp');
var webserver = require('gulp-webserver');
var include = require("gulp-include");
var htmlmin = require('gulp-htmlmin');
var watch = require('gulp-watch');
var ts = require('gulp-typescript');
var sass = require('gulp-sass');


gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'));
});

gulp.task("typescript", function() {
    return gulp.src('src/ts/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'main.js'
        }))
        .pipe(gulp.dest('build/js'));
});


gulp.task("dependencies", function() {
    gulp.src("node_modules/phaser/build/phaser.min.js")
        .pipe(gulp.dest("build/js/vendor"));
})

gulp.task('webserver', function() {
    gulp.src('build')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true
        }));
});

gulp.task('minify-html', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'));
});

gulp.task('watch_src', function() {
    // Endless stream mode 
    return watch('src/**/*', function() {
        gulp.start('build_src');
    });
});

gulp.task('watch', ['dependencies', 'watch_src']);
gulp.task('build', ['dependencies', 'build_src']);
gulp.task('build_src', ['typescript', 'minify-html', 'sass']);
