var http=require('http');
var server=http.createServer(function(req,res){
        if(res.url=='/favicon.ico'){
          return;
        }
    res.writeHead(200,{'content-Type':'text/html;charset=utf-8'});
    // res.end('南京第一帅：周赟');
    res.write('<h1>');
    res.write('南京第一帅：周赟');
    res.write('</h1>');
    console.log(url.parse(req.url));
});
server.listen(4000,'127.0.0.1');