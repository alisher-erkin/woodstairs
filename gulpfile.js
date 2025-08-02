var gulp = require("gulp");
var sass = require("gulp-sass")(require("node-sass"));

gulp.task("html", function () {
  return gulp
    .src("*.html")
    .pipe(gulp.dest("dist"));
});

gulp.task("sass", async function () {
  return gulp
    .src("scss/*.scss")
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest("/css"));
});

gulp.task("watch", function () {
  return gulp.watch("scss/*.scss", gulp.series(["sass"]));
  // Other watchers
});

gulp.task('build', gulp.series('sass'));
