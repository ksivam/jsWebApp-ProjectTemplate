(function(global, $, Q, S, undefined){
	"use strict";

	var DataAccess = (function() {
		function DataAccess() {
		};

		DataAccess.prototype._ajax = function(url, type, data) {
			return Q.Promise(function(resolve){
			    $.ajax({
			        url: url,
			        type: type,
			        data: data ? JSON.stringfy(data) : data,
			        dataType: "json"
			    }).then(function (data, textStatus, jqXHR) {
			        delete jqXHR.then; // treat xhr as a non-promise
			        resolve(jqXHR);
			    }, function (jqXHR, textStatus, errorThrown) {
			        delete jqXHR.then; // treat xhr as a non-promise
			        resolve(jqXHR);
			    });			
			});
		};

		DataAccess.prototype.get = function(url, data) {
			return this._ajax(url, "GET", data);
		};

		DataAccess.prototype.put = function() {
			var defer = Q.defer();
			
			return defer.promise;
		};

		DataAccess.prototype.post = function() {
			var defer = Q.defer();
			
			return defer.promise;
		};

		DataAccess.prototype.del = function() {
			var defer = Q.defer();
			
			return defer.promise;
		};

		return new DataAccess();
	})();

	S.dataAccess = DataAccess;

})(window, window.$, window.Q, window.S);