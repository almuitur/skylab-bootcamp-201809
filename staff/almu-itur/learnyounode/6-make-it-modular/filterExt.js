module.exports = function (directory, extension, callback) {

    var fs = require('fs')

    fs.readdir(directory, (err, list) => {
        if (err) return callback(err)
       
        var path = require('path');
        var res = list.filter(file => path.extname(file) === (`.${extension}`))

        callback(null, res)
    })
}