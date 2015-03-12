# Chatanyara.js

> Navigation and Resource Timing results

Name of this JavaScript helper utility has been inspired by the late Karate master from
Okinawa, Japan. His name has also been dedicated to a few Karate and Ryukyu Kobujutsu
kata, such as `Chatanyara Kushanku` and `Chatanyara no sai`.

[![wercker status](https://app.wercker.com/status/3f2efd13e486de3e5f2943f360dd78ec/s "wercker status")](https://app.wercker.com/project/bykey/3f2efd13e486de3e5f2943f360dd78ec)
[![Analytics](https://ga-beacon.appspot.com/UA-2643697-15/Chatanyara.js/index?flat)](https://github.com/igrigorik/ga-beacon)
[![Development Dependency Status](https://gemnasium.com/paazmaya/Chatanyara.js.svg)](https://gemnasium.com/paazmaya/Chatanyara.js)

## Installation

Chatanyara.js comes with a single file, called `Chatanyara.js`.
It can be downloaded to a local copy directly from
[GitHub](https://raw.github.com/paazmaya/Chatanyara.js/master/Chatanyara.js),
or installed via [Bower](http://bower.io/):

```sh
bower install Chatanyara.js
```

Also available via [jsDelivr - Open Source CDN](http://www.jsdelivr.com/#!chatanyara.js "Chatanyara.js at jsDelivr - Open Source CDN").

## Usage

In order to retrieve the values for the given performance related features,
it can be done as shown:

```js
var results = Chatanyara.parse();
```

Please note that it should be done no sooner than document has been loaded,
preferably after all assets have also been fully loaded.

The `results` will contain something similar as shown below, in case none
of the features are supported:

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

In a recent [Google Chrome](http://www.google.com/chrome‎), the results could be
something similar to:

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

In order to run the included [Mocha](http://visionmedia.github.io/mocha/ "Mocha is a feature-rich JavaScript test framework running on node.js and the browser, making asynchronous testing simple and fun")
based unit tests, use the following command:

```sh
mocha-phantomjs tests/index.html
```

Additionally the code conventions and proper use of JavaScript can be validated
via [eslint](http://eslint.org/ "The pluggable linting utility for JavaScript"):

```sh
node node_modules/eslint/bin/eslint.js --config .eslintrc --format compact Chatanyara.js
```

## Minification

The minified version is compiled with the following command, with [UglifyJS](https://github.com/mishoo/UglifyJS2/ "JavaScript parser / mangler / compressor / beautifier toolkit"):

```sh
uglifyjs -c -o Chatanyara.min.js --comments
```

## JSCritic results

[JSCritic](http://jscritic.com/ "Quickly check how well 3rd party script behaves")
is a tool that can be used to check how well a 3rd party script behaves in the
terms of overwriting native objects and other practises that are considered harmful.

Below are the result for `Chatanyara.js`, version 0.1.2.

```
Does it browser sniff?              No
Does it extend native objects?      No
Does it use document.write?         No
Does it use eval?                   No
Does it use ES6 features?           No
Does it use Mozilla-only features?  No
Does it have IE incompatibilities?  No
How many global variables?          1
    Chatanyara
How many unused variables?          1
    Chatanyara
Total size                          3.07KB
Minified size                       1.08KB
```

## Contributing

[Please refer to a GitHub blog post on how to create somewhat perfect pull request.](https://github.com/blog/1943-how-to-write-the-perfect-pull-request "How to write the perfect pull request")

## Version history

Version | Date       | Changes
------- | ---------- | --------
0.1.0   | 2013-12-31 | First release
0.1.1   | 2014-01-01 | Vanilla JS release with removal of jQuery.each
0.1.2   | 2014-03-04 | Mocha tests running at Travis CI #1
0.1.3   | 2014-04-21 | ESLint full pass, available via jsDelivr #4

## License

Copyright (c) Juga Paazmaya <olavic@gmail.com>

Licensed under the [MIT license](LICENSE-MIT).

