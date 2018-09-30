var http = require('http');
var url=require('url');
var route=require('./route.js')
var server = http.createServer(function (req, res) {
    if (req.url == '/favicon.ico') {
        return;
    }

    if(req.url=='/')
        route.showindex(req,res);
    else if(req.url=='/info')
        route.showinfo(req,res);
    else route.showerror(req,res);

});
server.listen(4005, '127.0.0.1');