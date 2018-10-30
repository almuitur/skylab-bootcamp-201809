var http = require('http')

http.get(process.argv[2], (resp) => { 
    
    resp.setEncoding('utf8')
    var allData = ''
    resp.on("data", (chunk) => allData += chunk)
    resp.on("end", (chunk) => {
    console.log(allData.length)
    console.log(allData)   
    })
})


