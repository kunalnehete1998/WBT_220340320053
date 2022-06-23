const { Server } = require('http');
let mysql = require('mysql2');
var con = mysql.createConnection({
    host:'localhost',
    user:'kunal',
    password:'12345',
    database:'wbt',
    port:3306
});
con.connect(function(err){
    if (err) throw err;
    // var data = "select * from book where bookid = 1"
    let sql = con.query("select * from book where bookid = 1");
    console.log(sql);
});



