const gulp = require('gulp'),
  browser = require('browser-sync').create(),
  sass = require('gulp-sass')(require('sass')),
  rename = require('gulp-rename'),
  cssmin = require('gulp-cssmin'),
  imagemin = require('image-min'),
  fs = require('fs'),
   concat = require('gulp-concat'),
  jsmin = require('gulp-jsmin');

let paths = {
  input: {
    scss: './src/scss/**/*.scss',
    js: './src/js/**/*.js',
    html: './**/*.html',
    images: './src/img/**/*',
    fonts: './src/fonts/**/*',
  },

  output: {
    css: './dist/css',
    js: './dist/js',
    images: './dist/img',
    fonts: './dist/fonts',
  },
};

function init() {
  // clear();
  css();
  javascript();
  images();
  fonts();
  watcher();
  server()
}

function watcher() {
  gulp.watch(paths.input.scss, css);
  gulp.watch(paths.input.js, javascript);
  gulp.watch(paths.input.html).addListener('change', html);
  gulp.watch(paths.input.images, images);
}

function css() {
  return gulp.src(paths.input.scss)
  .pipe(sass().on('error', sass.logError))
  .pipe(cssmin())
  .pipe(concat('style.min.css'))
  .pipe(gulp.dest(paths.output.css))
  .pipe(browser.stream());
}

function javascript() {
    return gulp.src(paths.input.js)
    .pipe(jsmin())
    .pipe(rename({
      suffix: '.min'
    }))
    // .pipe(concat('index.min.js'))
    .pipe(gulp.dest(paths.output.js))
    .pipe(browser.stream());

}
function html() {
    return browser.reload();
}
function images() {
  return gulp.src(paths.input.images)
  .pipe(gulp.dest(paths.output.images))

}
function fonts() {
  return gulp.src(paths.input.fonts)
  .pipe(gulp.dest(paths.output.fonts))

}

function clear() {
  try{
    fs.rmSync('./dist',{force: true, recursive: true});
    console.log('all files were removed successfully');

  }catch(error){
    console.log(error);
  }
}
function server () {
    browser.init({
        server: './',
        // tunnel: true,
   
    });
}

exports.default = gulp.series(init);
