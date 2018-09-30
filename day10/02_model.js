require('./a.js');
var a=require('./a.js')
console.log('model中调用a.js中a的属性：'+a.a);
console.log('model中调用a.js中b的方法：');
a.b();