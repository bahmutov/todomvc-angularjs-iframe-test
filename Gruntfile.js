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
        'bower_components/es5-shim/es5-shim.js',
        'todomvc.html'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-gh-pages');
};
