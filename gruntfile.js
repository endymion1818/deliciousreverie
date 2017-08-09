module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      concat: {
        js: {
          files: {
            'themes/deliciousreverie-v2/static/js/deliciousreverie-noncriticalscripts.js': ['themes/deliciousreverie-v2/source/js/noncritical/*.js'],
            'themes/deliciousreverie-v2/static/js/deliciousreverie-footerscripts.js': ['themes/deliciousreverie-v2/source/js/footer/*.js'],
          },
        },
      },
      uglify: {
        my_target: {
          files: {
            'themes/deliciousreverie-v2/static/js/deliciousreverie-noncriticalscripts.min.js': ['themes/deliciousreverie-v2/static/js/deliciousreverie-noncriticalscripts.js'],
            'themes/deliciousreverie-v2/static/js/deliciousreverie-footerscripts.min.js': ['themes/deliciousreverie-v2/static/js/deliciousreverie-footerscripts.js']
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
          dest: 'themes/deliciousreverie-v2/static/css/deliciousreverie.min.css'
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
