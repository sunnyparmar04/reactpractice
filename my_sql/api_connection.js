// var mysql = require('mysql');
// var con = mysql.createConnection({
//      host:"localhost",
//      user:'root',
//      port:3306,
//      password:'',
//      database:'s'
// });
// con.connect(function(error){
//      if(error)
//           console.log(error);
//      else
//           console.log("Connection Established.... ");
// });
// module.exports.con = con;

var mysql = require('mysql');
var con = mysql.createConnection({
     host:"localhost",
     user:'root',
     port:3306,
     password:'',
     database:'s'
});
con.connect(function(error){
     if(error)
          console.log(error);
     else
          console.log("Connection Established.... ");
});
module.exports.con = con;