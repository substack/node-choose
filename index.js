// transliterated from: https://en.wikipedia.org/wiki/Binomial_coefficient#Binomial_coefficient_in_programming_languages

module.exports = function (n, k) {
    if (k < 0 || k > n) return 0;
    if (k > n - k) k = n - k;
    var res = 1;
    for (var i = 0; i < k; i++) {
        res *= (n - k + i + 1) / (i + 1);
    }
    return Math.round(res);
};
