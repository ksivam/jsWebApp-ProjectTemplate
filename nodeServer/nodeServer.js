var http = require('http'),
Q = require('q\\q.js');

var responseAsync = function(){
	var defer = Q.defer();

	setTimeout(function(){
		defer.resolve({hello: "hello world"});
	}, 1500);

	return defer.promise;
};

var requestResponseHandler = function(req, res) {

	responseAsync()
	.then(function(result){
		var result = JSON.stringify(result);
		res.setHeader('Access-Control-Allow-Origin','http://localhost:21213');
	    res.writeHead(200, {"Content-Type": "application/json"});
	    res.end(result);

	    console.log("sending response: " + result);
	    console.log("==========END============");
	});
};

var server = http.createServer(requestResponseHandler);
server.listen(21214);

console.log("Running server at http://localhost:21214");