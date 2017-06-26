var gulp = require('gulp');
var htmlminify = require("gulp-html-minify");
var rename = require("gulp-rename");

gulp.task('html', function(){
    return gulp.src("./index_src.html")
        .pipe(htmlminify())
        .pipe(rename('index.html'))
        .pipe(gulp.dest("./"))
});


