var connection = require('./connection');
var sql = "Select * from student where id > 10";
connection.con.query(sql,function(error,result,fields){
     if(error)
          console.log(error);
     else
     {
          console.log(fields);
          // console.log(result);
          result.forEach(value => {
               // console.log(value);
               console.log(value.id,"  ",value.name,"  ",value.surname,"  ");
          });
     }
});
connection.con.end();