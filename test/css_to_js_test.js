'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.css_to_js = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  images: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/imgTest.js');
    var expected = grunt.file.read('test/expected/imgTest.js');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  },
  imports: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/pages/imports.js');
    var expected = grunt.file.read('test/expected/pages/imports.js');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

    test.done();
  },
  directory: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/module/foo/imgTest.js');
    var expected = grunt.file.read('test/expected/module/foo/imgTest.js');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

    test.done();
  },
};
