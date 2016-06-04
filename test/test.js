var router=require("../routes/")
var mocha=require("mocha");
var assert=require("assert");

describe("hello! test",function(){
    describe("get(/)",function(){
        it("hello mocha",function(){
            var msg="mocha";
            assert.equal("hello"+msg,router.hello(msg))
        })
    })
})