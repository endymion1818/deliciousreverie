module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      concat: {
        js: {
          files: {
            // 'assets/js/deliciousreverie-headerscripts.js': ['assets/source/js/header/*.js'],
            'themes/deliciousreverie-v2/static/js/deliciousreverie-footerscripts.js': ['themes/deliciousreverie-v2/source/js/footer/*.js'],
          },
        },
      },
      uglify: {
        my_target: {
          files: {
            // 'assets/js/deliciousreverie-headerscripts.min.js': ['assets/js/deliciousreverie-headerscripts.js'],
            'themes/deliciousreverie-v2/layouts/partials/scripts.html': ['themes/deliciousreverie-v2/static/js/deliciousreverie-footerscripts.js']
          }
        }
      },
      sass: {
        dist: {
          files: {
            'themes/deliciousreverie-v2/static/css/deliciousreverie.css': 'themes/deliciousreverie-v2/source/sass/all.scss'
          }
        }
      },
      cssmin : {
        css:{
          src: 'themes/deliciousreverie-v2/static/css/deliciousreverie.css',
          dest: 'themes/deliciousreverie-v2/layouts/partials/style.html'
        }
      },
      postcss: {
        options: {
          map: { inline: false }, // inline sourcemaps
          processors: [
            require('autoprefixer-core')({browsers: 'last 2 versions'}), // add vendor prefixes
            // require('cssnano')() // minify the result
          ]
        },
        dist: {
          src: 'themes/deliciousreverie-v2/static/css/*.css'
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
