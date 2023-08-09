var {MongoClient} = require('mongodb');
var url = `mongodb://0.0.0.0:27017/reactnode5`;
var client = new MongoClient(url);
async function main()
{
     await client.connect(url);
     console.log("Connection established ");
     var db = client.db('reactnode5');
     var collection = db.collection('students');

     var data1 = {"name":"dhruvik","age":19,"course":"react node"};
     var data2 = {"name":"jimmy","age":15,"course":"python","gender":"Male"};

     collection.insertMany([data1,data2]).then(function(error,result){
          if(error==true)
          {
               console.log(error.errmsg);
          }
          else
          {
               console.log("data added successfully ");
          }
     });

     return 'done';
}
main().then(console.log).catch(console.error)