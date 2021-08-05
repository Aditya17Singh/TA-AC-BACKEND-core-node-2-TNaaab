var http = require('http');
var qs  = require('querystring')

var server = http.createServer(handle)
function handle(req,res){
    var store = "";
    console.log(req.headers['content-type'])

    req.on('data' , (chunk) => {
        store += chunk;
    })
    req.on('end', () => {
        if(req.headers['content-type'] === 'application/x-www-form-urlencoded'){
            var formData = qs.parse(store)
            res.end(JSON.stringify(formData))
        }
        if(req.headers['content-type'] === 'application/json'){
            res.end(store)
        }

    })
}
server.listen(4000, () => {
    console.log('server listening on port')
})