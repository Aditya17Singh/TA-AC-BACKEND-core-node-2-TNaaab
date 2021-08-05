var http = require('http')

var server = http.createServer(handle)
var qs = require('querystring')
var fs = require('fs')

function handle(req,res){
    var store = ''
   req.on('data', (chunk) => {
       store += chunk
   })
   req.on('end', () => {
       if(req.url === '/form' && req.method === 'GET'){
           res.setHeader('Content-type' , 'text/html')
           fs.createReadStream('./form.html').pipe(req);
       }
   })
}

server.listen(5678, () => {
    console.log("server list on 3456")
})