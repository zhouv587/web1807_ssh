var http = require('http');
var fs=require('fs');
var url=require('url');



/*
css   js  请求没有专门去处理，导致页面加载不成功

*/ 
var server = http.createServer(function (req,res) {
    if (req.url == '/favicon.ico') {
        return;
    }
    //获取请求路径
    var pathname=url.parse(req.url).pathname;



//     fs.readFile('./project/index.html',function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         res.end(data)
//     }
// });
if(pathname=='/'){
    pathname='/index.html';
}
    fs.readFile('./project'+pathname,function(err,data){
        if(err){
            console.log('读取错误');
            return;
        }else{
            res.end(data);
        }
    });


});

server.listen(4002, '127.0.0.1');