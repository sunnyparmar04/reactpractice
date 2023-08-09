var { MongoClient } = require("mongodb");
var url = `mongodb://0.0.0.0:27017/reactnode5`;
var client = new MongoClient(url);
var dbnName = 'reactnode5';
async function main() {
     await client.connect(url);
     console.log("Connection Established ");
     var db = client.db();
     var collection = db.collection('students');
     var search = { 'name': 'sahil' };
     var newValues = { $set: { 'Course': 'Django', 'fees': 20000 } }
     collection.updateMany(search , newValues).then(function(error,result){
          if(error == true)
               console.log(error);
          else
               console.log("Update Successfull ");
     });
     return 'done.'
}
main().then(console.log).catch(console.error)