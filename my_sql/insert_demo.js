var connection = require("./connection.js");
var sql = "INSERT into student (id,name,surname) values ('12','jayg','parmaar')";
connection.con.query(sql,function(error,result){
     if(error)
     {
          console.log(error);
     }
     else
     {
          console.log("Row inserted Successfully ",result.insertId);
     }
});
connection.con.end();