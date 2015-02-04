# AngularJS TodoMVC Example + iFrame testing

See live [demo](http://glebbahmutov.com/todomvc-angularjs-iframe-test/)

This is a fork of only the Angularjs example from TodoMvc repo [tastejs/todomvc](https://github.com/tastejs/todomvc).

![TodoMVC iframe test](todomvc-iframe.gif)

```js
function testTodos(api) {
  api.removeAll()
    .then(delay)
    .then(function () {
      api.add('foo');
    })
    .then(delay)
    .then(function () {
      api.add('bar');
    })
    .then(delay)
    .then(function () {
      api.add('baz');
    })
    .then(delay)
    .then(assertTodos);
}
iframeApi().then(function (api) {
  console.log('send commands to iframed TodoMVC via todoApi object');
  testTodos(api);
});
```

The TodoMVC is driven via [iframe-api](https://github.com/bahmutov/iframe-api) at the model layer.

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/turtle-run/issues) on Github

## MIT License

The MIT License (MIT)

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
