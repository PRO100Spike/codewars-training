/// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

function isPalindrome(x) {
  // your code here
  x.toLowerCase();
  for (let i = 0; i < Math.floor(x.length / 2); i++) {
    if (x[i].toLowerCase() !== x[x.length - i - 1].toLowerCase())
      return false
  }
  return true
}

// best practices
const isPalindrome_best = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}
