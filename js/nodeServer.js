var http = require('http');

http.createServer(function(req, res) {
	res.setHeader('Access-Control-Allow-Origin','http://localhost:21213');
	res.setHeader('Connection', 'Transfer-Encoding');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Transfer-Encoding', 'chunked');

res.write("super ");
setTimeout(function() {
res.end("hello world");
}, 5000);
var i;
for(i = 0; i < 10; i++) {
res.write("superstart" + i + " ");
}
}).listen(21214);
