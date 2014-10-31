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

			return Q.Promise(function(resolve){
			    $.ajax(settings)
			    .then(function (data, textStatus, jqXHR) {
			        delete jqXHR.then; // treat xhr as a non-promise
			        resolve(jqXHR);
			    }, function (jqXHR, textStatus, errorThrown) {
			        delete jqXHR.then; // treat xhr as a non-promise
			        resolve(jqXHR);
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

		return new DataAccess();
	})();

	S.dataAccess = DataAccess;

	S.dataAccess
	.get("http://localhost:21214")
	.then(function(response){
		console.log(response.responseText);
	})

})(window, window.$, window.Q, window.S);