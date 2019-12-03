var express= require('express')
var db=require('../db')
var utils=require('../utils')
var router =express.Router()
router.get('/',(request,response)=>
{
    const connection=db.connect()
    var st='select * from product'
    connection.query(st,(error,data) => {
         connection.end()
         response.send(utils.createResult(error,data))
    })

})

router.post('/',(request,response)=>
{
    const {title,description,price}=request.body
    const connection=db.connect()
    var st=`insert into product(title,description,price) values('${title}','${description}','${price}')`
    connection.query(st,(error,data) => {
         connection.end()
         response.send(utils.createResult(error,data))
    })

})

module.exports=router
