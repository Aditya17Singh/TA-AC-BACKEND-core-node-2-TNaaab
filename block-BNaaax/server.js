var path = require('path')

var relativePath = './server.js'
var absolutePath = __dirname;
var formPath = path.join(__dirname, 'server.js');

console.log(formPath,relativePath)