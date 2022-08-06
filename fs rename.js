var http = require('http');
var fs = require('fs');
var port = 4040;


var server = http.createServer(function (req, res) {

    if (req.url == "/") {

        fs.readFileSync("oldfile.text", "newfile.text", function (result) {
            res.writeHead(200, { "Content-Type": "text/html" });
            if (result) {
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

//synconize

var http = require('http');
var fs = require('fs');
var port = 4040;


var server = http.createServer(function (req, res) {

    if (req.url == "/") {

        var result = fs.renameSync("oldfile.text", "newfile.text");
        res.writeHead(200, { "Content-Type": "text/html" });
        if (result) {
            res.write("File rename successfull");
        } else {
            res.write("File rename Failed");
        }

        res.end();

    }
})

server.listen(port);
console.log("server run");