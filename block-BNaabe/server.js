// var path = require('path')


// console.log(__filename);
// console.log(__dirname + '/app.js');

// console.log('./index.html')

//  var formPath = path.join(__dirname , 'index.html')
//  console.log(formPath)




var http = require('http')
var qs = require('querystring');

var server = http.createServer(handle)

function handle(req,res){
    if(req.method === 'POST' && req.url === '/'){
        var store = ''
        req.on('data' , (chunk) => {
            store += chunk;
        }).on('end' , () => {
            res.statusCode = 201;
            var parsedData = qs.parse(store);
            res.end(JSON.stringify(parsedData));
        }) 
    }
//    var dataFormat = req.headers['content-type']
//     var store = ""
//    req.on('data' , (chunk) => {
//        store = store + chunk;
//    });

//    req.on('end' , () => {
//        if(dataFormat === "application/json"){
//           var parsedData =  JSON.parse(store)
//           res.end(store)
//        }
//        if(dataFormat === 'application/x-www-form-urlencoded'){
//          var parsedData =  qs.parse(store);
//          res.end(JSON.stringify(parsedData))
//        }
//    })
}

server.listen(3000, () => {
    console.log("server list on 3000")
})