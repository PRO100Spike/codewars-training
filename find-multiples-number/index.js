// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript

function findMultiples(integer, limit) {
  //your code here
  let multiples = Math.floor(limit / integer);
  let res = [];
  if (multiples <= 0) return 0
  for (let i = 1; i <= multiples; i++) {
    res.push(integer * i)
  }
  return res
}
