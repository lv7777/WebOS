//mocha helloworld
// mocha auto detect under test directory.and act coinsided with testing

//writed simple node js server

var express=require("express");
var app=express();
// var assert=require("assert");

// describe('mocha test',function(){
    
// });

app.get('/',function(req,res){
    console.log('ddd')//req.query.a);
    res.send('hello!'+req.query.b);
})

app.listen(3000);