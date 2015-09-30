module.exports = function(grunt) {
  // Configuration de Grunt
  grunt.initConfig({

    less: {
      development: {
        options: {
          paths: ["assets/css"]
        },
        files: {
          "path/to/result.css": "path/to/source.less"
        }
      },
    },

    uglify: {
      options: {
        separator: ';'
      },
      dist: {
        src: [
          // Library
          'assets/bower_components/jquery/dist/jquery.min.js',
          'assets/bower_components/angularjs/angular.min.js',
          'assets/bower_components/semantic-ui/dist/semantic.min.js',

          // Angular Files
          'assets/js/angular/app.js', 
          'assets/js/angular/factory/*', 
          'assets/js/angular/service/*',
          'assets/js/angular/Controller/*', 
        ],
        dest: 'assets/js/myprivateplace.js' // destination
      }
    },

    concat_css: {
      options: {},
      all: {
        src: [
          'assets/css/reset.css',
          'assets/bower_components/semantic-ui/dist/semantic.min.css',
          'assets/css/basic.css',
        ],
        dest: 'assets/css/myprivateplace.css' // destination
      },
    },

  });


  // Import des packages
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');

  // Définition des tâches Grunt
  grunt.registerTask('default', ['uglify:dist','concat_css:all']);
};