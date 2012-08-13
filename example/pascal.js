var choose = require('../');

var count = Number(process.argv[2]) || 20;
var rows = [];
for (var n = 0; n < count; n++) {
    var row = [];
    for (var k = 0; k <= n; k++) {
        row.push(choose(n, k));
    }
    rows.push(row.join(' '));
}

var len = rows[rows.length - 1].length;
rows.forEach(function (row) {
    var n = Math.floor((len - row.length) / 2) + 1;
    console.log(Array(n).join(' ') + row);
});
