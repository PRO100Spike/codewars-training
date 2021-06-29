const dict = new Map([
    ["null", 0],
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000]
]);

function solution(roman) {
    // complete the solution by transforming the
    // string roman numeral into an integer
    if (roman.length === 0) {
        return 0;
    } else {
        console.log(roman.length, roman[0], dict.get(roman[0]));
        let curent = roman[0];
        let next = roman.length ? roman[1] : "";
        let nearbyDiff = dict.get(next) - dict.get(curent);
        if ([4, 9, 40, 90, 400, 900].indexOf(nearbyDiff) !== -1) {
            return nearbyDiff + solution(roman.substr(2));
        } else {
            return dict.get(roman[0]) + solution(roman.substr(1));
        }
    }
}
