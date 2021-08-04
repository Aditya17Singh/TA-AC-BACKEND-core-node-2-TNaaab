var http = require('http')
var fs = require('fs')

var server = http.createServer(handle)

function handle(req,res){
    res.setHeader('content-Type', 'text/plain')
  fs.createReadStream('./readme.txt').pipe(res)
}

server.listen(3000,() => {
    console.log("server listening on port")
})