// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

var summation = function (num) {
 if (num < 0) throw Error("Cannot calculate factorial of a negative number");
  function iter(i, fact) {
    return i === 0 ? fact : iter(i-1, i+fact);
  }
  return iter(num, 0);
}
