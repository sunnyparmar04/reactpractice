var express = require('express');
var app = express();
app.set('view engine' , 'pug');
app.set('views','template');
app.get('/contact_us',function(request,response){

     let data = {'name':'Param Patel' , 'age':19 , 'email':'iamparam102@gmail.com'}
     response.render('lesson3',data);
});
app.get('/login',function(request,response){
     
     let data = {'name':'Param Patel' , 'age':19 }
     response.render('lesson4',data);
})
app.listen(5000);
console.log("Server ready ");