(function(global, $, Q, S, undefined) {
	"use strict";

	/**
	 * Logs the message to console.
	 *
	 * @param  The message.
	 */
	var log = function(message){
		console.log(message);
	};

	S.log = log;	
})(window, window.$, window.Q, window.S);