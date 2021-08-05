// var path = require('path')
// var relativePath = './index.html';
// var absolutePath = __dirname;
// var formPath = path.join(__dirname , 'index.html')

// console.log(formPath)


var http = require('http')
var qs = require('querystring');

var server = http.createServer(handle)

function handle(req,res){
   var dataFormat = req.headers['content-type']
    var store = ""
   req.on('data' , (chunk) => {
       store = store + chunk;
   });

   req.on('end' , () => {
       if(dataFormat === "application/json"){
          var parsedData =  JSON.parse(store)
          res.end(store)
       }
       if(dataFormat === 'application/x-www-form-urlencoded'){
         var parsedData =  qs.parse(store);
         res.end(JSON.stringify(parsedData))
       }
   })
}

server.listen(3456, () => {
    console.log("server list on 3456")
})