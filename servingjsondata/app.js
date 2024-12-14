const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res) {
    console.log(`Request was made: ${req.url}`)
    res.writeHead(200, {'Content-Type': 'application/json'})

    const myObj = {
        name: 'Dev',
        job: 'Web Developer',
        age: 21
    }

    res.end(JSON.stringify(myObj))

})

server.listen(3000)
console.log(`Now listening to port 3000`)