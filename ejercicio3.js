const http = require('http'), fs = require("fs");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    fs.readFile("./index.html", (err, html) => {
        console.log(server);
        res.write(html)
        res.end()
    })
});

server.listen(port, hostname);