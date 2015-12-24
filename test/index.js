// test/test_index.js

/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind')

global.Vue = require('vue')
global._ = require('lodash')

// require all modules ending in "_test" from the
// current directory and all subdirectories
var testsContext = require.context(".", true, /\.test$/)
testsContext.keys().forEach(testsContext)
