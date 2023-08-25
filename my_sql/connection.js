var mysql = require('mysql');
var con = mysql.createConnection({
     host:"localhost",
     user:'root',
     port:3306,
     password:'',
     database:'sunny'
});

     con.connect(function(error){
     if(error)
     {
          console.log(error);
     }
     else
     {
          console.log("Connection Established... ");
     }
});
// con.end()
module.exports.con = con;