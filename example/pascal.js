var choose = require('../');

var rows = 15;
for (var n = 0; n < rows; n++) {
    var row = [];
    for (var k = 0; k <= n; k++) {
        row.push(choose(n, k));
    }
    console.dir(row);
}
