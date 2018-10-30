var myModule = require('./filterExt')

myModule(process.argv[2], process.argv[3], (err, list) => {
    if (err) return err
    list.forEach(file => console.log(file))
    
})