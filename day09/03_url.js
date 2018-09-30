var http=require('http');
var url=require('url');
var server=http.createServer(function(req,res){
    if(req.url=='/favicon.ico'){
        return;
    }
//获取请求地址(包括请求路径与请求参数)
var urlStr=req.url;
//使用url模块调用parse方法，来转换urlStr字符串
var urlObj = url.parse(urlStr,true);
//第二个参数默认为fasle，表示解析出来的url对象中的query属性为未解码的字符串
//如果写true，则会将query属性解析为一个对象，方便我们调用其中参数的属性值

console.log(urlStr);
console.log('---------');
console.log(urlObj);

    res.end();
})
server.listen(4000,'localhost');