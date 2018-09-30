var http = require('http');
var fs=require('fs');
var server = http.createServer(function (req, res) {
    if (req.url == '/favicon.ico') {
        return;
    }
    if(req.url=='/'){
        fs.readFile('./05_form.html',function(err,data){
            if(err){
                coonsole.log(err);
                res.end('加载页面失败了');
                return;
            }else {
                res.end(data);
            }
        });  
    }
        if(req.url=='/tijiao'&&req.method.toLowerCase()=='post'){
            //因为nodejs是单线程非I/O阻塞，为了追求效率，数据时小段一小段的上传
            //这样就会产生2中状态：正在接收，接收完毕
            
            var alldata='';//提交声明一个变量alldata，用于保存每一次得到的一小段数据
            req.addListener('data',function(chunk){
                //data:表示正在接收数据的状态
                //chunk：表示每次接受到的一小段的数据
                //拼接每一次得到的小段数据
                alldata+=chunk;
            });
            req.addListener('end',function(){
               //end表示接收完成的状态，当数据全部接收完毕， 进入该状态
               //数据已经接收完毕
               console.log(alldata);
               res.end();
            });
            res.end('AAA');
            
        }
});
server.listen(4001, '127.0.0.1');