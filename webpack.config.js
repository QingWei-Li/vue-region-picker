var path = require('path')
var cmdArgs = require('minimist')(process.argv.slice(2))
var curEnv = ''

const allowedArgs = ['dev', 'test', 'build']
const webpackConfig = {
  dev: require(path.join(__dirname, 'config/webpack.dev.js')),
  test: require(path.join(__dirname, 'config/webpack.test.js')),
  build: require(path.join(__dirname, 'config/webpack.build.js'))
}

if (!cmdArgs.env || allowedArgs.indexOf(cmdArgs.env) === -1) {
  curEnv = 'dev'
} else {
  curEnv = cmdArgs.env
}

module.exports = webpackConfig[curEnv]