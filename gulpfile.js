var gulp 		= require('gulp');
var webserver 	= require('gulp-webserver');
var include 	= require("gulp-include");
var htmlmin 	= require('gulp-htmlmin');
var watch 		= require('gulp-watch');
var ts 			= require('gulp-typescript');

// gulp.task("scripts", function() {
// 	gulp.src("src/js/main.js")
// 	.pipe(include())
// 	.pipe(gulp.dest("build/js"));
// });	

gulp.task("typescript",function(){
	return gulp.src('src/ts/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'main.js'
        }))
        .pipe(gulp.dest('build/js'));
});


gulp.task("dependencies",function(){
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
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'));
});

gulp.task('watch_src', function () {
    // Endless stream mode 
    return watch('src/**/*', function(){
    	gulp.start('build_src');
    });
});

gulp.task('watch',['dependencies','watch_src']);
gulp.task('build',['dependencies','typescript','minify-html']);
gulp.task('build_src',['typescript','minify-html']);

