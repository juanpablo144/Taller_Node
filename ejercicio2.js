var http = require("http"), fs = require("fs")
var contador = 0;

http.createServer((req,res) => {
    fs.readFile("./index.html", (err, html) => {
        contador++;
        console.log("peticion exitosa")
        console.log("numero de peticiones" + contador);
        res.write(html)
        res.end();
    })
}).listen(3000)