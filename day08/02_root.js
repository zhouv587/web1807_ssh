//引入http模块
var http=require('http');
var fs=require('fs');
//通过http创建服务器
var server=http.createServer(function(req,res){
//因为nodejs没有根目录，所以无法通过
//locahost：4000/02_root.html来获取里面的内容
//可以使用fs模块来实现这个功能

//使用fs来读取02_root.html的内容，并将读取到的数据作为响应内容，返回给页面
fs.readFile('./02_root.html',function(err,data){
    if(err){
        // 读取文件出错了
        console.log(err);//打印出错信息
        res.end('read file error!');//结束，并返回
    }else {
        console.log(data.toString);//查看data
        res.end(data);//返回读取的数据
    }
});
});

//开启服务，监听窗口
server.listen(4001,'localhost');