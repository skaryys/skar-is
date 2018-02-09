//define gulp and other packages
const gulp = require("gulp");
const runSequence = require("run-sequence");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const size = require("gulp-size");
const uglify = require("gulp-uglify");

//supported browsers for autoprefixer
const supportedBrowsers = ['>0.5%', 'last 4 versions', 'Firefox ESR', 'not ie < 10'];

//compile scss styles
gulp.task("styles", function() {
   return gulp.src("assets/scss/main.scss")
       .pipe(sass().on("error",sass.logError))
       .pipe(autoprefixer({
           browsers: supportedBrowsers
       }))
       .pipe(cssnano())
       .pipe(gulp.dest("dist"))
       .pipe(size({ title: "Style file size:"}))
});

gulp.task("scripts", function() {
   return gulp.src("assets/js/main.js")
       .pipe(uglify())
       .pipe(gulp.dest("dist"))
       .pipe(size({ title: "Scripts file size:"}))
});

gulp.task("default", function() {
   runSequence("styles","scripts");
});