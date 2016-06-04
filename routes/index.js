var express=require("express");
var app=express.Router();
app.hello=function(msg){
    return "hello"+msg;
}
app.get("/:msg",function(req,res){
    res.render("index",{title:router.hello(req.params.msg)});
})
module.exports=app;
