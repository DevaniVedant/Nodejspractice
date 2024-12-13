const http = require('http')
const fs = require('fs')

const myReadStream = fs.createReadStream(`${__dirname}/readme.txt`)
const myWriteStream = fs.createWriteStream(`${__dirname}/writeme.txt`)

myReadStream.on('data', function(chunk) {
    console.log('New chunk received')
    myWriteStream.write(chunk)
})