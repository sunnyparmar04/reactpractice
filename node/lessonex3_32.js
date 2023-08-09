var express = require('express');
var app = express();
// localhost:5000/product/2
// 127.0.0.1:5000/product/2
app.get('/product/:productid/:name', function (request, response) {
    consolel.console.log(request.params);
    response.send("product id is " + request.params.productid + "product name is " + request.params.name);
});
app.listen(5000, function (error) {
    if (error = !null)
        console.log(error);
    else
        console.log('server ready...');
});