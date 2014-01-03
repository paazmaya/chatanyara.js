var connect = require('connect'), http = require('http');
var app = connect()
  .use(connect.logger('dev'))
  .use(connect.directory(__dirname + '/../', { icons: true }))
  .use('/', connect.static(__dirname + '/../'));
var server = http.createServer(app).listen(5050);

// ---

var MochaSauce = require('../node_modules/mocha-sauce/index.js');

// configure cloud
var sauce = new MochaSauce({
	name: 'Chatanyara Sogo Embu Kumite',
	username: process.env.SAUCE_USERNAME,
	accessKey: process.env.SAUCE_API_KEY,
  build: process.env.TRAVIS_COMMIT,
	host: 'localhost',
	port: 4445,
	url: 'http://localhost:5050/tests/index.html',
  tags: ['master']
});
console.dir(sauce);

sauce.record(true); // true for screenshots


// https://saucelabs.com/platforms/selenium
var browsers = [
  {
    browserName: 'googlechrome',
    platform: 'Windows 8.1',
    version: '31'
  },
  {
    browserName: 'firefox',
    platform: 'Windows 8',
    version: '26'
  },
  {
    browserName: 'opera',
    platform: 'Windows 7',
    version: '12'
  },
  {
    browserName: 'iehta',
    platform: 'Windows XP',
    version: '8'
  },
  {
    browserName: 'safari',
    platform: 'OS X 10.8',
    version: '6'
  },
  {
    browserName: 'firefox',
    platform: 'Linux',
    version: '4'
  }
];
browsers.forEach(function (item) {
  sauce.browser(item);
});  

sauce.on('init', function(browser) {
  console.log('\tinit\t: %s %s (%s)', browser.browserName, browser.version, browser.platform);
});

sauce.on('start', function(browser) {
  console.log('\tstart\t: %s %s (%s)', browser.browserName, browser.version, browser.platform);
});

sauce.on('end', function(browser, res) {
  console.log('\tend\t: %s %s (%s): %d failures', browser.browserName, browser.version, browser.platform, res.failures);
});

sauce.start(function(err, res) {
	if (err) {
		console.log(err);
	}

	// res is an array, iterate over it and .browser tells you which
	// browser the results are for.
	//console.log(res[0].browser);

	// A full report in xUnit syntax (useful for CI integration)
	//console.log(res[0].xUnitReport);

	// A full report in Jasmine-style JSON syntax
	//console.log(res[0].jsonReport);
  
  server.close();
});
