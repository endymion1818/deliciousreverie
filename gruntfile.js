module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      concat: {
        js: {
          files: {
            // 'assets/js/deliciousreverie-headerscripts.js': ['assets/source/js/header/*.js'],
            'themes/deliciousreverie/static/js/deliciousreverie-footerscripts.js': ['themes/deliciousreverie/source/js/footer/*.js'],
          },
        },
      },
      uglify: {
        my_target: {
          files: {
            // 'assets/js/deliciousreverie-headerscripts.min.js': ['assets/js/deliciousreverie-headerscripts.js'],
            'themes/deliciousreverie/source/js/deliciousreverie-footerscripts.min.js': ['themes/deliciousreverie/source/js/deliciousreverie-footerscripts.js']
          }
        }
      },
      sass: {
        dist: {
          files: {
            'themes/deliciousreverie/static/css/deliciousreverie.css': 'themes/deliciousreverie/source/sass/all.scss'
          }
        }
      },
      cssmin : {
        css:{
          src: 'themes/deliciousreverie/static/css/deliciousreverie.css',
          dest: 'themes/deliciousreverie/static/css/deliciousreverie.min.css'
        }
      },
      postcss: {
        options: {
          map: true, // inline sourcemaps
          processors: [
            require('autoprefixer-core')({browsers: 'last 2 versions'}), // add vendor prefixes
            // require('cssnano')() // minify the result
          ]
        },
        dist: {
          src: 'themes/deliciousreverie/static/css/*.css'
        }
      }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-postcss');

  // Default task(s).
  grunt.registerTask('default', [
    'concat',
    'uglify',
    'sass',
    'cssmin',
    'postcss'
    ]);
};
