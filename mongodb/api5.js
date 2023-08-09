var {MongoClient} = require('mongodb');
var url = `mongodb://0.0.0.0:27017/reactnode5`;
var bodyparser = require('body-parser');
var client = new MongoClient(url);
var express = require('express');
var dbname = 'reactnode5';
var app = express();
app.use(express.json());
app.use(express.urlencoded({'extended':true}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({'extended':true}));

app.post('/students',function(request,response){

     async function main()
     {
          await client.connect(url);
          console.log("Connection Established ");
          var db = client.db(dbname);
          var collection  = db.collection('students');
          let name = request.body.name;
          let age = request.body.age;
          let fees = request.body.fees;
          let data = {
               'name':name,
               'age':age,
               'fees':fees
          }
          collection.insertOne(data).then(function(error,result){
               if(error == true)
               {
                    console.log(error);
                    response.json({'error':error.errmsg});
               }
               else
               {
                    console.log("Insert Successfully ");
                    response.json({'message':'Insert Successfully '});
               }
          });
          return 'done.';
     }
     main();
});
app.listen(5000);