var http = require('http');

http.createServer(function(req, res) {
	var result = JSON.stringify({hello: "hello world"});

	res.setHeader('Access-Control-Allow-Origin','http://localhost:21213');
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(result);
    console.log("sending response: " + result);
    console.log("==========END============");
}).listen(21214);

console.log("Running server at http://localhost:21214");