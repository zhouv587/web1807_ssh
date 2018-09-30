function student(name,age){
    this.name=name;
    this.age=age;
}

student.prototype.study=function(){
    console.log(this.name+'为何这么帅？');
}

var s1=new student('周赟',23);
s1.study();
module.exports.student=student;