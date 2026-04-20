// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

const reverseSeq = (n) => {
  return [...new Array(n)].map((el, i, arr) => arr.length - i);
}
