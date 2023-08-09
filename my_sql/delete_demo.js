var connection = require('./connection');
var sql = "Delete from student where id = 11";
connection.con.query(sql,function(error,result){

     if(error)
          console.log(error);
     else
          console.log("Affected rows ",result.affectedRows);
});
connection.con.end();