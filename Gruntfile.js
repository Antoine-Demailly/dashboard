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



  });


  // Import des packages
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Définition des tâches Grunt
  grunt.registerTask('default', '');
};