var MochaSauce = require('../node_modules/mocha-sauce/index.js');

// configure cloud
var sauce = new MochaSauce({
	name: 'Chatanyara Sogo Embu Kumite',
	username: 'paazmaya',
	accessKey: '',
	host: 'localhost',
	port: 260112,
	url: 'http://localhost:260112/tests/test.html'
});

sauce.record(true);

sauce.browser({ browserName: 'chrome', platform: 'Windows 7' });

sauce.on('init', function(browser) {
  console.log('\tinit\t: %s %s', browser.browserName, browser.platform);
});

sauce.on('start', function(browser) {
  console.log('\tstart\t: %s %s', browser.browserName, browser.platform);
});

sauce.on('end', function(browser, res) {
  console.log('\tend\t: %s %s: %d failures', browser.browserName, browser.platform, res.failures);
});

sauce.start(function(err, res) {
	if(err) {
		console.log(err);
	}

	// res is an array, iterate over it and .browser tells you which
	// browser the results are for.
	//console.log(res[0].browser);

	// A full report in xUnit syntax (useful for CI integration)
	//console.log(res[0].xUnitReport);

	// A full report in Jasmine-style JSON syntax
	//console.log(res[0].jsonReport);

});
