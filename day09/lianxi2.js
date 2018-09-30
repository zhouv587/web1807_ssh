var http = require('http');
var url=require('url');
var fs=require('fs');
var server = http.createServer(function (req, res) {
     var urlStr=url.parse(req.url,true);
    if (req.url == '/favicon.ico') {
        return;
    }
    fs.readFile('./form.html',function(err,data){
        if(err){
            console.log(err);
            res.end('read error');
        }else{                           1
14+            res.write(data);
res.write('用户名：');
res.write(urlStr.query.username);
res.write('<br>');
res.write('密码：');
res.write(urlStr.query.password);

        }
    });
   



});
server.listen(4000, '127.0.0.1');