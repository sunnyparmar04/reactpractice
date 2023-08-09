var { MongoClient } = require("mongodb");
var database_url = "mongodb://0.0.0.0:27017/reactnode5";

const client = new MongoClient(database_url);
const dbName = 'reactnode5';
async function main() {
     await client.connect();
     console.log('Connected successfully to server');
     const db = client.db(dbName);
    //  const collection = db.collection('student');
     await db.createCollection('systems1').then(function (error, result) {
          if (error == true) {
               console.log(error.errmsg);
          }
          else {
               console.log('Collection created successfully ');
          }
     });
     return 'done.';
}
main().then(console.log).catch(console.error).finally();