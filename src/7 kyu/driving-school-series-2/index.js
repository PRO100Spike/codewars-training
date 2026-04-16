// https://www.codewars.com/kata/589b1c15081bcbfe6700017a/train/javascript

function cost (mins) { 
  return mins >= 60 ? 
    mins % 30 > 5 ? 
    Math.ceil((mins - 60) / 30) * 10 + 30 : Math.ceil((mins - 65) / 30) * 10 + 30 
  : 30 ;
} 
  
