(function(global, $, Q, S, undefined) {
	"use strict";

	var Log = (function(){
		// Log utility function.
		function Log(){
		};

		/**
		 * Logs the message to console.
		 *
		 * @param  The message.
		 */
		Log.write = function(message){
			console.log(message);
		};

		return Log;
	})();

	S.log = Log;	
})(window, window.$, window.Q, window.S);