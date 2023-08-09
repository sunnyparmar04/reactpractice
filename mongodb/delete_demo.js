var {MongoClient } = require('mongodb');
var url = `mongodb://0.0.0.0:27017/reactnode5`;
var client = new MongoClient(url);
var dbName = 'reactnode5';
async function main()
{
     await client.connect(url);
     console.log("Connection Established ");
     var db = client.db(dbName);
     var collection = db.collection('students');
     var search = {'name':'Param'};
     collection.deleteMany(search).then(function(error,result){
          if(error==true)
               console.log(error);
          else
               console.log("Delete Successfully ");
     });
     return 'done.'
}
main().then(console.log).catch(console.error);