# Chatanyara.js

> Navigation and Resource Timing results

Name of this JavaScript helper has been inspired by the late Karate master from 
Okinawa, Japan. His name has been dedicated to few Karate and Ryukyu Kobujutsu
kata, such as `Chatanyara Kushanku` and `Chatanyara no sai`.

[![Build Status](https://travis-ci.org/paazmaya/Chatanyara.js.png?branch=master)](https://travis-ci.org/paazmaya/Chatanyara.js)
[![Analytics](https://ga-beacon.appspot.com/UA-2643697-15/Chatanyara.js)](https://github.com/igrigorik/ga-beacon)

## Installation

```sh
bower install Chatanyara.js
```

## Usage

```js
var results = Chatanyara.parse();
```

Returns something similar to

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

## Testing

```sh
mocha-phantomjs tests/index.html
```

```sh
node node_modules/eslint/bin/eslint.js --config eslint.json Chatanyara.js
```

## Version history

Version | Date       | Changes
------- | ---------- | --------
0.1.0   | 2013-12-31 | First release
0.1.1   | 2014-01-01 | Vanilla JS release with removal of jQuery.each
0.1.2   | 2014-01-xx | Mocha tests running at Travis CI #1

## License

Copyright (c) 2013-2014 Juga Paazmaya <olavic@gmail.com>

Licensed under the [MIT license](LICENSE-MIT).

