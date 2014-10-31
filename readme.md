Steps to run the project:
=========================

1. Host the project using a web server
--------------------------------------
* Windows: (Pre-req: iisexpress)
	* CMD_PROMPT#> "C:\Program Files (x86)\IIS Express\iisexpress.exe" /path:root\jsProjectTemplate /port:21213

* Mac: (pre-req: python)
	* root\jsProjectTemplate#>python -m SimpleHTTPServer 21213

2. Run the project
------------------
Open any browser and hit url http://localhost:21213


Notes:
=====
* Used http://cdnjs.com/ to reference js libraries.
* Used Q's promise (https://github.com/kriskowal/q) to avoid 'Pyramid of Doom' in JS async programming pattern.
* Used JQuery, JQuery mobile and knockout JS libraries.
* Used sublime JsDocs (https://github.com/spadgos/sublime-jsdocs) to generate JsDocs.
* Used nodejs for server side request/response handling (http://nodejs.org/)
* For testing used 
	* Mocha test Fx: http://mochajs.org/
	* Chai assertion library: http://chaijs.com/
