module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("grunt-jscs");
  grunt.loadNpmTasks('grunt-jsdoc');


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'meta': {
      'jsFilesForTesting': [
        'bower_components/jquery/jquery.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-sanitize/angular-sanitize.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/restangular/dist/restangular.js',
        'bower_components/underscore/underscore.js',
        'bower_components/underscore/underscore.js',
        'test/**/*Spec.js'
      ]
    },

    'karma': {
      'development': {
        'configFile': 'karma.conf.js',
        'options': {
          'files': [
            '<%= meta.jsFilesForTesting %>',
            'source/**/*.js'
          ],
        }
      }
	   },

    'jshint': {
      'beforeconcat': ['source/**/*.js'],
    },

    'jscs': {
        'src': 'source/**/*.js',
        'options': {
            'config': ".jscsrc",
            'esnext': true, // If you use ES6 http://jscs.info/overview.html#esnext
            'verbose': true, // If you need output with rule names http://jscs.info/overview.html#verbose
            'fix': true, // Autofix code style violations when possible.
            'requireCurlyBraces': [ "if" ]
        }
    },

    'concat': {
      'dist': {
        'src': ['source/**/*.js'],
        'dest': 'dist/<%= pkg.namelower %>-<%= pkg.version %>.js'
      }
    },

    'uglify': {
      'options':{
        'mangle': true
      },
      'dist': {
             'files': {
               'dist/<%= pkg.namelower %>-<%= pkg.version %>.min.js': ['dist/<%= pkg.namelower %>-<%= pkg.version %>.js']
             }
      }
    },

    'jsdoc': {
      'src':  ['source/**/*.js'],
      'options': {
        'destination': 'doc'
      }
    }
  });

  grunt.registerTask('test', ['karma:development']);
  grunt.registerTask('build',
  [
    'jshint',
    'jscs',
    'karma:development',
    'concat',
    'uglify'
  ]);

};
