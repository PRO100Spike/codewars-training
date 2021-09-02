// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
function highAndLow(numbers){
  let arr = numbers.split(' ');
  let min = +arr[0], max = +arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (+arr[i] > max) max = arr[i]
    if (+arr[i] < min) min = arr[i]
  }
  return `${max} ${min}`
}