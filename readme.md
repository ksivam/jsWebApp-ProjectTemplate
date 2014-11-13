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
* Used nodejs for handling server side request/response (http://nodejs.org/)
* For testing used 
	* Mocha test Fx: http://mochajs.org/
	* Chai assertion library: http://chaijs.com/

End to end test:
================
* Selenium JS webdriver (https://code.google.com/p/selenium/wiki/WebDriverJs)


Issues:
=======
* npm installed modules fails to load in node with error: Error: Cannot find module 'module_name'
	* Run npm in command line to find out the module global install path
	* export NODE_PATH=<npm global install path>
		* Add this path to .bash_profile (windows environment path)
	* http://stackoverflow.com/questions/12594541/npm-global-install-cannot-find-module