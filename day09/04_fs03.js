var fs=require('fs');

fs.writeFile('./1.txt','aaa',function(err){
    if(err){
        console.log('创建失败');
        console.log(err);
    }else {
        console.log('创建成功');

    }
});