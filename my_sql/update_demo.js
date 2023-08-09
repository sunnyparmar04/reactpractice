var connection = require('./connection');
var sql = "UPDATE student SET surname = 'patel' where id = 10";
connection.con.query(sql,function(error,result){

     if(error)
     {
          console.log(error);
     }
     else
     {
          console.log("Affected Rows ",result.affectedRows);
     }
});
connection.con.end();