const http = require('http'), fs = require("fs");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    fs.readFile("./variables.html", (err, html) => {

        var html_string = html.toString();
        console.log(html_string);
        

        var name = "Juan";
        var lastname = "Perez";
        var age = "19";
        var institute = ["Bictia", "Sena"];

        var variables = html_string.match(/[^\{\}]+(?=\})/g);

        for(var i = 0; i < variables.length; i++) {
            var value = eval(variables[i])
            html_string = html_string.replace("{" + variables[i] + "}",value)
        }
        res.write('<style> body{background: red;} </style>')
        res.write(html_string)
        res.end()
    })
});

server.listen(port, hostname);