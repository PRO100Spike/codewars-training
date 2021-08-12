https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/solutions/javascript

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
const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}
