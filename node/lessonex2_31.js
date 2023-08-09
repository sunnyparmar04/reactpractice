var express = require('express');
var app = express();

app.get('/login',function (request, respose) {
    console.log("login vai get");
    respose.send("please login");
});
app.post('  ', function (request, response) {
    console.log("login via post ");
    response.send("Login Successfull ");
});
    
app.put('/login', function (request, response) {
    console.log("Login via put method ");
    response.send("Login Via put ");
});

app.delete('/login', function (request, response) {
    console.log("Login via delete method ");
    response.send("Login via delete method ");
});
app.listen(5000,function(error){

    if(error != null)
         console.log(error);
    else
         console.log("Server Ready.. ");     
});
// console.log("Server ready...");
