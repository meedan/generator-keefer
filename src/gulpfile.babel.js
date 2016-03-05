import fs from 'fs';
import gulp from 'gulp';
import gutil from 'gulp-util';
import jade from 'gulp-jade';
import rename from 'gulp-rename';
import zip from 'gulp-zip';
import replace from 'gulp-replace';
import bump from 'gulp-bump';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack/config';
import config from './config.json'

/*
 * Common tasks
 */

gulp.task('replace-webpack-code', () => {
  const replaceTasks = [{
    from: './webpack/replace/JsonpMainTemplate.runtime.js',
    to: './node_modules/webpack/lib/JsonpMainTemplate.runtime.js'
  }, {
    from: './webpack/replace/log-apply-result.js',
    to: './node_modules/webpack/hot/log-apply-result.js'
  }];
  replaceTasks.forEach(task => fs.writeFileSync(task.to, fs.readFileSync(task.from)));
});

/*
 * Build tasks
 */

gulp.task('config:build:chrome', () => {
  gulp.src('./src/chrome/extension/manifest.json.example')
  .pipe(bump())
  .pipe(gulp.dest('./src/chrome/extension'));
  
  gulp.src('./src/chrome/extension/manifest.json.example')
  .pipe(replace('Title', '<%= name %>'))
  .pipe(replace('Description', '<%= description %>'))
  .pipe(rename('manifest.json'))
  .pipe(gulp.dest('./build/chrome'));

  gulp.src('./src/app/config/config.js.example')
  .pipe(rename('config.js'))
  .pipe(gulp.dest('./src/app/config'));
});

gulp.task('webpack:build:chrome', (callback) => {
  let myConfig = Object.create(webpackConfig);
  webpack(myConfig, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }
    gutil.log('[webpack:build]', stats.toString({ colors: true }));
    callback();
  });
});

gulp.task('views:build:chrome', () => {
  gulp.src([
    './src/chrome/views/*.jade',
    '!./src/chrome/views/devtools.jade'
  ])
  .pipe(jade({
    locals: { env: 'prod' }
  }))
  .pipe(gulp.dest('./build/chrome'));
});

gulp.task('copy:build:chrome', () => {
  gulp.src('./src/chrome/extension/manifest.json').pipe(gulp.dest('./build/chrome'));
  gulp.src('./src/assets/**/*').pipe(gulp.dest('./build/chrome'));
});

gulp.task('build:chrome', ['replace-webpack-code', 'config:build:chrome', 'webpack:build:chrome', 'views:build:chrome', 'copy:build:chrome']);
