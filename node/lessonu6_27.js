// node:_http_outgoing:742
//     throw new ERR_INVALID_ARG_TYPE(
//     ^

// TypeError [ERR_INVALID_ARG_TYPE]: The "chunk" argument must be of type string or an instance of Buffer or Uint8Array. Received type number (200)
//     at new NodeError (node:internal/errors:372:5)
//     at write_ (node:_http_outgoing:742:11)
//     at ServerResponse.write (node:_http_outgoing:707:15)
//     at Server.<anonymous> (D:\Ankitsir\ReactNode\node\url4.js:6:12)
//     at Server.emit (node:events:527:28)
//     at parserOnIncoming (node:_http_server:956:12)
//     at HTTPParser.parserOnHeadersComplete (node:_http_common:128:17) {
//   code: 'ERR_INVALID_ARG_TYPE'
// }

// // http://localhost:5000/calc?num1=10&num2=90&option=1
var http = require("http");
var url = require("url");
var server = http.createServer((req, res) => {
  let my_url = url.parse(req.url, true);
  res.writeHead(200, { "content-type": "text/html" });
  if (my_url.pathname == "/calc") {
    let num1 = parseInt(my_url.query["num1"]);
    let num2 = parseInt(my_url.query["num2"]);
    let option =parseInt(my_url.query["option"]);
    let ans;
    if (option == 1) {
      ans = num1 + num2;
    } else if (option == 2) {
      ans = num1 - num2;
    } else if (option == 3) {
      ans = num1 * num2;
    } else if (option == 4) {
      ans = num1 / num2;
    } else if (option == 5) {
      and = Math.max(num1, num2);
    } else if (option == 6) {
      and = Math.min(num1, num2);
    } else if (option == 7) {
      if (num1 == num2) {
        ans = "Both are same";
      } else {
        ans = "Both are not same";
      }
    }
    console.log(ans);
    res.end();
  }
});

server.listen(5000);
console.log("server ready");