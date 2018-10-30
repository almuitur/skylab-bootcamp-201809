const argv = process.argv.slice(2)

let result = 0

for (i=0; i<argv.length; i++) {
    result = result + parseInt(argv[i])
}

console.log(result)

