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
