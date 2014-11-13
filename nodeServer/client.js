var Q = require('q/q.js');

var asyncFunc = function() {
	var defer = Q.defer();

	setTimeout(function(){
		defer.resolve("success");
	}, 2000);

	return defer.promise;
};

asyncFunc().then(function(result){
	console.log(result);
});