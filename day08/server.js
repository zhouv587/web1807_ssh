//引入http模块
var http=require('http');

//通过http创建服务器
var server=http.createServer(function(req,res){
    //end方法作用：结束请求，返回响应
    
    // res.end('this is my first nodejs page!');
    //如果要使用中文，需要先设置消息头
    res.writeHead(200,{'content-Type':'text/html;charset=utf-8'});
    res.end('南京第一帅：周赟。为何这么帅！');
});

//开启服务，监听窗口
server.listen(4000,'localhost');