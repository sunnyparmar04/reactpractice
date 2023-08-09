var {MongoClient} = require('mongodb');
var express=require('express');
var app=express();
var url = "mongodb://0.0.0.0:27017/reactnode5";
var client = new MongoClient(url);
app.get('/students', function (request, response) {



    async function main()
    {
        await client.connect();
        var db = client.db('reactnode5');
        var collection = db.collection('students');
        collection.find().project({name:1,fees:1}).toArray().then((result)=>{
            
            var output=JSON.parse(JSON.stringify(result));
            response.send(output);
       })
    }
    main();
});
app.listen(5000);