var fs = require('fs')

fs.readdir(process.argv[2], 'utf8', (err, list) => {
    // if (!err) {
        if (err) throw err
        list.forEach(file => {

        var path = require('path');
        var ext = path.extname(file);
        var ext1 = '.' + process.argv[3]

        if(ext===ext1) {
            console.log(file)
        }
    })
    // }
})