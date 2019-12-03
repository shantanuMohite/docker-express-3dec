const express = require('express')
const bodyparser=require('body-parser')
const routerProduct=require('./routes/product')

const app=express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/',(request,response)=>
{
    response.send("welcome to my backend")
});
app.use(bodyparser.json())
app.use('/product',routerProduct)
app.listen(9786,'0.0.0.0',()=>{
console.log("listening omn port 9786")
})