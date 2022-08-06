var http = require('http');
var fs = require('fs');
var port = 4040;

//asynconize
var server = http.createServer(function (req, res) {

    if (req.url == "/") {

        fs.readFile("home.html", function (error, fileData) {


            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(fileData);
            res.end();

        })
    }
})

server.listen(port);
console.log("server run");

//synconize

var http = require('http');
var fs = require('fs');
var port = 4040;


var server = http.createServer(function (req, res) {

    if (req.url == "/") {

        var fileData = fs.readFileSync("home.html");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(fileData);
        res.end();

    }
})

server.listen(port);
console.log("server run");