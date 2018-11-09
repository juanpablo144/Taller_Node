const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  setInterval(function(){console.log('Hola NodeJS');}, 2000);
  res.setHeader('Content-Type', 'text/plain');
  res.end();
});

server.listen(port, hostname);