var webpackConfig = require('./webpack.config')

// Karma configuration
// Generated on Fri Nov 13 2015 15:43:32 GMT+0800 (CST)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    browsers: ['PhantomJS'],

    // When Karma is watching the files for changes,
    // it tries to batch multiple changes into a single run
    // so that the test runner doesn't try to start
    // and restart running tests more than it should.
    // The configuration setting tells Karma how long to wait (in milliseconds)
    // after any changes have occurred before starting the test process again.
    autoWatchBatchDelay: 1000,

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai-jquery', 'chai', 'sinon', 'sinon-chai', 'jquery-2.1.0'],

    // list of files to exclude
    exclude: [],

    files: [
        // only specify one entry point
        // and require all tests in there
      'test/index.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/index.js': ['webpack', 'sourcemap']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type: 'lcov', // lcov or lcovonly are required for generating lcov.info files
      dir: 'coverage/'
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity,

    webpack: webpackConfig,

    webpackServer: {
      noInfo: true
    }

  })
}
