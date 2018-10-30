var fs = require('fs')

var buff = fs.readFileSync(process.argv[2])

var str = buff.toString()

var divisions = str.split('\n')

console.log(divisions.length - 1)



