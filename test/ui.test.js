var webdriver = require('selenium-webdriver/index.js');

var driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();

driver.get('https://portal.azure.com');
driver.findElement(webdriver.By.name('login')).sendKeys('ksadasiv@live.com');
driver.findElement(webdriver.By.id('cred_continue_button')).click();
	driver.findElement(webdriver.By.name('passwd')).sendKeys('love21bangalore');
	driver.findElement(webdriver.By.name('SI')).click();
	
driver.wait(function() {


 return driver.getTitle().then(function(title) {
   return title === 'webdriver - Google Search';
 });
}, 1000);

driver.quit();