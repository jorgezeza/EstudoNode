
var mysql = require('mysql');     //trás o pacote mysql

var con = function(){
    return  mysql.createConnection({
    host:'localhost',
    port:'3307',
    user:'root',
    password:'345210',
    database:'curso_node'
});

};



module.exports = con;
