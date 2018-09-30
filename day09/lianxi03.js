var fs=require('fs');

fs.readdir('./a',function(err,files){
    if(err){
        console.log(err);
    }
  
    // for(var i=0,j=0;i<files.length;i++){
    //     fs.stat('./a/'+files[i],function(err,stats){
    //         if(stats.isFile()){
    //             aa[j]=files[j];
    //             j++;
               
    //         }
    //         else {
    //            bb[j]=files[j];
    //            j++;
              

    //         }
    //     });
    // }
    

    
   // 递归
    var aa=[],bb=[];
    (function a(i){
        if(i==files.length){ 
            console.log('文件有：');
            for(key in aa)
            console.log(aa[key]);

            console.log('文件夹有：');
            for(key in bb)
            console.log(bb[key]);
            return;
        }
        //遍历没有结束，检查判断每一个元素的状态
        fs.stat('./a/'+files[i],function(err,stats){
            if(err){
                console.log(err);
                return;
        }
        if(stats.isFile()){
            aa[i]=files[i];

                    }
                    else {
                        bb[i]=files[i];
                    }
             a(++i);       
        })
     
    })(0)
    
    
    
});