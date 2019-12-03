var mysql= require('mysql')

function connect()
{
 const connection =mysql.createConnection({
     host:'172.17.0.1',
     user:'root',
     password:'root',
     database:'mydb',
     port:9999
     
 })
    connection.connect()
    return connection
}

module.exports={
    connect : connect
}