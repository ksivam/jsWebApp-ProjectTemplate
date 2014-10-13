(function(global, $, Q, S, undefined){
	"use strict";

	var that = this,
	ajax = function(url, type, data) {
		return Q.Promise(function(resolve){
		    $.ajax({
		        url: url,
		        type: type,
		        data: JSON.stringfy(data),
		        dataType: "json"
		    }).then(function (data, textStatus, jqXHR) {
		        delete jqXHR.then; // treat xhr as a non-promise
		        resolve(jqXHR);
		    }, function (jqXHR, textStatus, errorThrown) {
		        delete jqXHR.then; // treat xhr as a non-promise
		        resolve(jqXHR);
		    });			
		});
	}, 
	get = function(url, data) {
		return that.ajax(url, "GET", data);
	},
	put = function() {
		var defer = Q.defer();
		
		return defer.promise;
	},
	post = function() {
		var defer = Q.defer();
		
		return defer.promise;
	},
	del = function() {
		var defer = Q.defer();
		
		return defer.promise;
	};

	S.dataAccess = {
		get: get,
		put: put,
		post: post,
		del: del
	};

S.dataAccess.get("dgfdg", {hello: "world"});

})(window, window.$, window.Q, window.S);