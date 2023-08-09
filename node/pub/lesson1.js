var express =require('express');
var app = express();
app.set('view engine','pug');
app.set('views','template');
app.get('/lesson1',function(request,response){

     response.render("lesson1.pug");
});
app.get('/lesson2',function(request,response){
     response.render("lesson2.pug");
});
app.listen(5000);
console.log("server ready ");