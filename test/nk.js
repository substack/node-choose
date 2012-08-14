var test = require('tap').test;
var choose = require('../');

test('nk', function (t) {
    t.equal(choose(0,0), 1);
    t.equal(choose(5,3), 10);
    t.equal(choose(12,7), 792);
    t.equal(choose(4,3), 4);
    t.equal(choose(4,2), 6);
    t.end();
});
