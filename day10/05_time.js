// var now =new Date();
// var year=now.getFullYear();
// var month=now.getMonth()+1;
// var day=now.getDate();
// console.log(year+'-'+month+'-'+day);

var sd=require('silly-datetime');
//获取当前时间

var now=new Date();
var str=sd.format(now,'YYYY-MM-DD HH:mm:ss');
console.log(str);