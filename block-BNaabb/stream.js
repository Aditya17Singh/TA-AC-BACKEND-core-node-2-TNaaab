var http = require('http')

var server = http.createServer(handle)

function handle(req,res){
    var store = ""
   req.on('data' , (chunk) => {
       store = store + chunk;
   });

   req.on('end' , () => {
       console.log(store)
   })
}

server.listen(3456, () => {
    console.log("server list on 3456")
})