var http = require('http');
var server = http.createServer(function (req, res) {
    if (req.url == '/favicon.ico') {
        return;
    }
});
server.listen(4001, '127.0.0.1');