module.exports = function(grunt){

   // Configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {

    },

    htmlhint: {
      options: {
      },
      all: {
        src: [
          'index.html'
        ]
      }
    },

    jshint: {
      options: {
      },
      all: [
        'gruntfile.js',
        'assets/js/*.js'
      ]
    },

    recess: {
      dist: {
        options: {
          compile: true,
          compress: true
        },
        files: {
          'assets/css/custom.min.css': ['assets/less/custom.less']
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'assets/js/app.min.js': [
            'assets/js/plugins.js',
            'assets/js/main.js'
          ]
        },
        options: {
          // JS source map: to enable, uncomment the lines below and update sourceMappingURL based on your install
          // sourceMap: 'assets/js/scripts.min.js.map',
          // sourceMappingURL: '/app/themes/roots/assets/js/scripts.min.js.map'
        }
      }
    },

    watch: {
      less: {
        files: [
          'assets/less/*.less'
        ],
        tasks: ['less']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: true
        },
        files: [
          'assets/css/custom.min.css',
          'assets/js/app.min.js',
          '*.html'
        ]
      }
    }

  });

  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-recess');

  // Define your tasks here
  grunt.registerTask('default', [ 'htmlhint', 'jshint', 'recess', 'uglify' ]);
    
};