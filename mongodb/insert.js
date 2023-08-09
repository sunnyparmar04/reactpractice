var { MongoClient } = require('mongodb');
var url = `mongodb://0.0.0.0:27017/react5`;

var client = new MongoClient(url);
var dbname = 'react5'
async function main() {
     await client.connect(url);
     console.log("Connection established.. ");
     let db = client.db(dbname);
     let collection = db.collection('students');
     let data = { "name": "sunny", "Course": "python", "fees": 10000 }
     collection.insertOne(data).then( function (error, result) {
          if (error == true) {
               console.log(error.errormsg);
          }
          else {
               console.log("Data inserted Successfully ");
          }
     });
     return 'done';
}
main().then(console.log).catch(console.error);