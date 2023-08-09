var express = require('express');
var connection = require('./api_connection');
var app = express();
app.get('/catelog',function(request,response){
     sql = "SELECT c.* , s.title from catelog c , service_provider s where c.service_proid = s.id";
     connection.con.query(sql,function(error,result,fields){
          if(error)
               response.json({'error':error})
          else
          {
               var output = JSON.parse(JSON.stringify(result));
               response.json(output);
          }
     });
     connection.con.end();
});
app.listen(5000);