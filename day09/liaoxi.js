var http = require('http');
var url=require('url');
var fs=require('fs');
var server = http.createServer(function (req, res) {
    if (req.url == '/favicon.ico') {
        return;
    }
    var urlStr=req.url;
    if(urlStr=='/circle') urlStr='./yuan.html';
    else if(urlStr=='/square')urlStr='./fang.html';
     
    fs.readFile(urlStr,function(err,data){
        if(err){
            res.end('read file error!');//结束，并返回
        }else {
            res.end(data);//返回读取的数据
        }
    });

});
server.listen(4000, '127.0.0.1');