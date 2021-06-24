function solution(roman) {
    // complete the solution by transforming the
    // string roman numeral into an integer
    let res = 0;
    let arr = roman.split("");
    //const reversed = arr.reverse();
    let curent = arr.shift();
    let next = arr.length ? arr.shift() : null;
    console.log(curent, next, arr.length);
    return arr.length ? solution(arr.join("")) : res;
}

solution("MDCLXVI");
