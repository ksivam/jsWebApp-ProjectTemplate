var http = require('http'),
Q = require('q/q.js');

var responseAsync = function(){
	var defer = Q.defer();

	setTimeout(function(){
		defer.resolve({hello: "hello world"});
	}, 1500);

	return defer.promise;
},
sendJsonResponse = function(result, res){
	res.setHeader('Access-Control-Allow-Origin','http://localhost:21213');
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(result);

    console.log("sending response: " + result);
    console.log("==========END============");
},
requestResponseHandler = function(req, res) {

	responseAsync()
	.then(function(result){		
		sendJsonResponse(JSON.stringify(result), res);
	})
	.catch(function(error){
		sendJsonResponse(JSON.stringify(error), res);
	});
},
server = http.createServer(requestResponseHandler);

server.listen(21214);
console.log("Running server at http://localhost:21214");