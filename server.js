"use strict";
var http = require('http');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World change test for this version 3  test smart git 2\n');
}).listen(port);
//# sourceMappingURL=server.js.map