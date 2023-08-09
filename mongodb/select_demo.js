var { MongoClient, ObjectId } = require('mongodb');
var url = `mongodb://0.0.0.0:27017/reactnode5`;
var client = new MongoClient(url);
var dbname = 'reactnode5';
async function main() {
     await client.connect(url);
     console.log("Connection established ");
     var db = client.db(dbname);
     var collection = db.collection('students');

     collection.find({ _id: new ObjectId("64cbc767ab5c50e9d9ee6ef6") }, { projection: { _id: 0 } }).toArray().then((error, result) => {
          console.log("callback check ");
          if (error) {
               console.log("error check ");
               console.log(error)
          } else
               console.log(result);
     });
     return 'done.'
}
main().then(console.log).catch(console.error);