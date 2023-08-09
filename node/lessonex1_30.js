var express =require('express');
var app = express ();

app.get ('/',function(request,respose){
    console.log("home age called");

});
app.get ('/aboutus',function(request,respose){
    console.log("about page called")
});

app.listen(5000)
console.log("server called ")