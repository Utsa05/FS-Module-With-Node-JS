var http = require('http');
var fs = require('fs');
var port = 4040;


var server = http.createServer(function (req, res) {

    if (req.url == "/") {

        fs.writeFile("newfile.text", "Well come to new file", function (error) {
            res.writeHead(200, { "Content-Type": "text/html" });
            if (error) {
                res.write("File Write Failed");
            } else {
                res.write("File write successfull");
            }

            res.end();
        })

    }
})

server.listen(port);
console.log("server run");

//Synconize
var http = require('http');
var fs = require('fs');
var port = 4040;


var server = http.createServer(function (req, res) {

    if (req.url == "/") {

        var error = fs.writeFile("newfile.text", "Well come to new file");
        res.writeHead(200, { "Content-Type": "text/html" });
        if (error) {
            res.write("File Write Failed");
        } else {
            res.write("File write successfull");
        }

        res.end();

    }
})

server.listen(port);
console.log("server run");