//First argument: port
//Write current date + "YYYY-MM-DD hh:mm" + \n
//Close

let date = new Date()
data = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes()

var net = require('net')
var server = net.createServer(function (socket) {
   
    socket.write(data)
    socket.end('\n')
    // socket.end(data)

})
server.listen(process.argv[2])