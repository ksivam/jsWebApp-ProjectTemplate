(function(global, $, Q, S, undefined){
	"use strict";

	var DataAccess = (function() {
		function DataAccess() {
		};

		DataAccess.prototype._ajax = function(url, type, data) {
			var settings = {
				url: url,
				type: type,
				dataType: "json"
			};

			if(data) {
				settings.data = JSON.stringfy(data);
			}

			return Q.Promise(function(resolve, reject) {
			    $.ajax(settings)
			    .then(function (data, textStatus, jqXHR) {
			        resolve(data);
			    }, function (jqXHR, textStatus, errorThrown) {
			        reject({
			        	statusCode: jqXHR.status,
			        	message: errorThrown.message,
			        	stackTrace: errorThrown.stack
			        });
			    });			
			});
		};

		DataAccess.prototype.get = function(url) {
			return this._ajax(url, "GET");
		};

		DataAccess.prototype.put = function(url, data) {
			var defer = Q.defer();
			
			return defer.promise;
		};

		DataAccess.prototype.post = function(url, data) {
			var defer = Q.defer();
			
			return defer.promise;
		};

		DataAccess.prototype.del = function(url, data) {
			var defer = Q.defer();
			
			return defer.promise;
		};

		// create a new DataAccess object.
		return new DataAccess();
	})();

	S.dataAccess = DataAccess;

	S.dataAccess
	.get("http://localhost:21214")
	.then(function(response){
		S.log.write("result: " + JSON.stringify(response));
	})
	.catch(function(error){
		S.log.write("error: " + JSON.stringify(error));
	});

})(window, window.$, window.Q, window.S);