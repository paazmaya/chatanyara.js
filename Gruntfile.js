module.exports = function(grunt) {
  'use strict';
  
  // https://saucelabs.com/platforms/selenium
  var browsers = [
    {
      browserName: 'googlechrome',
      platform: 'Windows 8.1',
      version: '31'
    },
    {
      browserName: 'firefox',
      platform: 'Windows 8',
      version: '26'
    },
    {
      browserName: 'opera',
      platform: 'Windows 7',
      version: '12'
    },
    {
      browserName: 'iehta',
      platform: 'Windows XP',
      version: '8'
    },
    {
      browserName: 'safari',
      platform: 'OS X 10.8',
      version: '6'
    },
    {
      browserName: 'firefox',
      platform: 'Linux',
      version: '4'
    }
  ];
    
  grunt.initConfig({
    connect: {
      server: {
        options: {
          base: '',
          port: 9999
        }
      }
    },
    'saucelabs-mocha': {
      all: {
        options: {
          username: 'paazmaya',
          urls: ['http://127.0.0.1:9999/test-mocha/test/browser/opts.html'],
          tunnelTimeout: 5,
          tunneled: false,
          build: process.env.TRAVIS_JOB_ID,
          concurrency: 3,
          browsers: browsers,
          testname: 'mocha tests',
          tags: ['master']
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-saucelabs');

  grunt.registerTask('test', ['connect', 'saucelabs-mocha']);
  grunt.registerTask('default', ['test']);

};
