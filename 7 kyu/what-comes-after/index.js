// https://www.codewars.com/kata/590f5b4a7bbb3e246000007d/train/javascript
// goto: need fin
function comes_after(str,l) {
  //code
  console.log(str, l)
 console.log(str.toLowerCase().match(new RegExp(`(?=${l.toLowerCase()}).{2}`, 'g')))
  // st strArr = 
  return str.toLowerCase().match(new RegExp(`(?=${l.toLowerCase()}).{2}`, 'g')).reduce((a, b) => {
    return a + b[1]
  }, '')
}
