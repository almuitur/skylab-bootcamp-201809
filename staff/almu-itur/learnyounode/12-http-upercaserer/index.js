var http = require('http')
var map = require('through2-map')

http.createServer(function (req, res) {

    if (req.method == 'POST') {
        
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
        // var body = '';
        // req.on('data', function (data) {
        // body += data
        // })
    }
}).listen(process.argv[2])