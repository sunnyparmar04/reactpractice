var {MongoClient}=require("mongodb");
var url ="mongodb://0.0.0.0:27017/react5";
var client = new MongoClient(url);
var dbname="react5";
async function main()
{
     await client.connect()
     console.log("server conected");
     var db= client.db(dbname);
     var collection =db.collection("students");
     return "done";
}
main().then(console.log).catch(console.error).finally(() => client.close());
