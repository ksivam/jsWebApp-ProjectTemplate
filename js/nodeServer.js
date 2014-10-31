var http = require('http');

http.createServer(function(req, res) {
	res.setHeader('Access-Control-Allow-Origin','http://localhost:21213');
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({hello: "hello world"}));
}).listen(21214);
