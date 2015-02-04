/*global module:false*/
module.exports = function (grunt) {
  grunt.initConfig({
    'gh-pages': {
      options: {
        base: '.'
      },
      src: [
        'readme.md',
        'index.html',
        'todomvc.html',
        'js/**/*.js',
        'bower_components/es5-shim/es5-shim.js',
        'bower_components/iframe-api/dist/iframe-api.js',
        'bower_components/todomvc-app-css/*',
        'bower_components/todomvc-common/*',
        'bower_components/angular/angular.js',
        'bower_components/angular-route/angular-route.js'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-gh-pages');
};
