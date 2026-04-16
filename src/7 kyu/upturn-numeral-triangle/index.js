// https://www.codewars.com/kata/564f3d49a06556d27c000077/train/javascript

function pattern(n){
   var output="";
 //initiate your code
  for (let i = 1; i <= n; i++) {
    output += ' '.repeat(i-1) + ` ${i % 10}`.repeat(n - i + 1) + (i !== n ? '\n' : '')
  }
 return output;
}
