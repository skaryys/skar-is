//define gulp and other packages
const gulp = require("gulp");
const runSequence = require("run-sequence");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const size = require("gulp-size");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");

//supported browsers for autoprefixer
const supportedBrowsers = [">0.5%"];
//compile scss style
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

//compile javascripts
gulp.task("scripts", function() {
   return gulp.src(["assets/js/main.js","assets/js/components/*.js"])
       .pipe(concat("main.js"))
       .pipe(uglify())
       .pipe(gulp.dest("dist"))
});

gulp.task("default", function() {
   runSequence("styles","scripts");
});