//fs.createReadStream()
// src.pipe(dst)

var fs = require('fs')
var http = require('http')

http.createServer(function (req, res) {
    
    var readStream = fs.createReadStream(process.argv[3])
    readStream.on('open', function () {
        readStream.pipe(res);
      })

}).listen(process.argv[2])


