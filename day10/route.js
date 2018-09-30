function showindex(req,res){
    res.write(req.url);
   res.end('this is index!');
}
function showinfo(req,res){
    res.write(req.url);

   res.end('this is meage!');
}
function showerror(req,res){
    res.write(req.url);

   res.end('this is error page!');
}
exports.showindex=showindex;
exports.showinfo=showinfo;
exports.showerror=showerror;


