#!/usr/bin/env node

var http = require('http')
var fs = require('fs')
var path = require('path')
var API = 'http://www.zxinc.org/gb2260-latest.htm'

/**
 * 发送请求获取 weather 数据
 * @param  {string} api url
 * @return {string}     json
 */
var request = function (api) {
  return new Promise((resolve, reject) => {
    http.request({
      hostname : 'www.zxinc.org',
      port : 80,
      method : 'get',
      path : '/gb2260-latest.htm',
      handers:{}
    }, res => {
      var data = ''

      res.on('data', chunck => data += chunck)
      res.on('end', () => resolve(data))
    }).on('error', reject)
  })
}

/**
 * 保存文件
 * @param  {string} content  内容
 * @param  {string} filePath 文件相对路径
 * @return {string}          文件相对路径
 */
var saveFile = function (content, filePath) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, err => {
      if (err) reject(err)
      resolve(filePath)
    })
  })
}

/**
 * 读取文件内容
 * @param  {string} filePath 文件相对路径
 * @return {string}          json
 */
var readFile = function (filePath) {
  return new Promise((resolve, reject) => {
    var content

    try {
      content = require(path.join(__dirname, filePath))
    } catch (e) {
      reject(e)
    }
    resolve(content)
  })
}

request(API)
  .then(data => console.log(data))
  .catch(e => console.log(e))
