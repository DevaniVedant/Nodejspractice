const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res) {
    console.log(`Request was made: ${req.url}`)

    if(req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(`${__dirname}/index.html`).pipe(res)
    } else if(req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(`${__dirname}/contact.html`).pipe(res)
    } else if(req.url === '/api/people') {
        var people = [{name: 'daksh', age: 20}, {name: 'james', age: 35}, {name: 'mary', age: 23}, {name: 'paula', age: 28}]
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(people))
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(`${__dirname}/404.html`).pipe(res)
    }
})

server.listen(3000)
console.log(`Now listening to port 3000`)