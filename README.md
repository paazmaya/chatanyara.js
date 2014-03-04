# Chatanyara.js

> Navigation and Resource Timing results

Name of this JavaScript helper has been inspired by the late Karate master from 
Okinawa, Japan. His name has been dedicated to few Karate and Ryukyu Kobujutsu
kata, such as `Chatanyara Kushanku` and `Chatanyara no sai`.

[![Build Status](https://travis-ci.org/paazmaya/Chatanyara.js.png?branch=master)](https://travis-ci.org/paazmaya/Chatanyara.js)
[![Analytics](https://ga-beacon.appspot.com/UA-2643697-15/Chatanyara.js)](https://github.com/igrigorik/ga-beacon)

## Installation

Chatanyara.js comes with a single file, called `Chatanyara.js`. 
It can be downloaded to a local copy directly from [Github](https://raw.github.com/paazmaya/Chatanyara.js/master/Chatanyara.js), 
or installed via [Bower](http://bower.io/):

```sh
bower install Chatanyara.js
```

## Usage

In order to retrieve the values for the given performance related features, it can be done as shown:

```js
var results = Chatanyara.parse();
```

Please note that it should be done no sooner than document has been loaded, preferably after all assets have also been fully loaded.

The `results` will contain something similar as shown below, in case none of the features are supported:

```js
{
  url: '/',
  userAgent: 'Mozilla 5 ...',
  navigation: false,
  resource: false,
  memory: false
}
```

Depending on the browser, the keys `navigation`, `resource` and `memory` will provide 
further information about each related performance API.

In a recent [Google Chrome](http://www.google.com/chrome‎), the results could be something similar to:

```js
{
  url: "/tests/index.html",
  userAgent: "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1870.2 Safari/537.36",
  navigation: {
    loadEventEnd: 552,
    loadEventStart: 552,
    domComplete: 552,
    domContentLoadedEventEnd: 548,
    domContentLoadedEventStart: 533,
    domInteractive: 533,
    domLoading: 346,
    responseEnd: 312,
    responseStart: 312,
    requestStart: 309,
    secureConnectionStart: 0,
    connectEnd: 308,
    connectStart: 81,
    domainLookupEnd: 81,
    domainLookupStart: 81,
    fetchStart: 81,
    redirectEnd: 0,
    redirectStart: 0,
    unloadEventEnd: 0,
    unloadEventStart: 0,
    navigationStart: 0,
    redirectCount: 0,
    navigationType: "NAVIGATE"
  },
  resource: [
    {
      responseEnd: 283.82799999963026,
      responseStart: 283.5369999993418,
      requestStart: 283.37099999771453,
      secureConnectionStart: 0,
      connectEnd: 283.08499999911874,
      connectStart: 283.08499999911874,
      domainLookupEnd: 283.08499999911874,
      domainLookupStart: 283.08499999911874,
      fetchStart: 283.08499999911874,
      redirectEnd: 0,
      redirectStart: 0,
      initiatorType: "link",
      duration: 0.7430000005115289,
      startTime: 283.08499999911874,
      entryType: "resource",
      name: "http://localhost:8000/node_modules/mocha/mocha.css"
    },
    {
      responseEnd: 286.09899999719346,
      responseStart: 283.84899999946356,
      requestStart: 283.7249999975029,
      secureConnectionStart: 0,
      connectEnd: 283.4519999996701,
      connectStart: 283.4519999996701,
      domainLookupEnd: 283.4519999996701,
      domainLookupStart: 283.4519999996701,
      fetchStart: 283.4519999996701,
      redirectEnd: 0,
      redirectStart: 0,
      initiatorType: "script",
      duration: 2.6469999975233804,
      startTime: 283.4519999996701,
      entryType: "resource",
      name: "http://localhost:8000/node_modules/mocha/mocha.js"
    }
  ],
  memory: {
    jsHeapSizeLimit: 793000000,
    usedJSHeapSize: 10000000,
    totalJSHeapSize: 10000000
  }
}
```

## Testing

In order to run the included [Mocha](http://visionmedia.github.io/mocha/) based unit tests, use the following command:

```sh
mocha-phantomjs tests/index.html
```

Additionally the code conventions and proper use of JavaScript can be validated via [eslint](http://eslint.org/):

```sh
node node_modules/eslint/bin/eslint.js --config eslint.json --format compact Chatanyara.js
```

## Version history

Version | Date       | Changes
------- | ---------- | --------
0.1.0   | 2013-12-31 | First release
0.1.1   | 2014-01-01 | Vanilla JS release with removal of jQuery.each
0.1.2   | 2014-03-04 | Mocha tests running at Travis CI #1

## License

Copyright (c) 2013-2014 Juga Paazmaya <olavic@gmail.com>

Licensed under the [MIT license](LICENSE-MIT).

