var assert = require('assert');
var lib = require('../');
describe("merge", function () {
   var merge = lib.merge;
   it('should merge string', function () {
     var a = "http://example.com/"
     var b = "/foo/bar";
     assert.equal(merge(a, b, '/'), "http://example.com/foo/bar");
   });

   it('should auto merge string by char', function () {
     var a = "http://example.com/"
     var b = "/foo/bar";
     assert.equal(merge(a, b), "http://example.com/foo/bar");
   });

   it('should auto merge string by string', function () {
     var a = "i like cat"
     var b = "cat is lonely";
     assert.equal(merge(a, b), "i like cat is lonely");
   });

   it('should auto merge string progressively', function () {
     var a = "i like catcat"
     var b = "catcat is lonely";
     assert.equal(merge(a, b), "i like catcat is lonely");
   });
   
   it('bunch test', function () {
     var a = "http://abc/"
     var b = "efg";
     assert.equal(merge(a, b, '/'), "http://abc/efg");
   });
});


