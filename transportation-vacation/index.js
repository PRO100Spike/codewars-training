// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

function rentalCarCost(d) {
  // Your solution here
  return d < 7 ? (d < 3 ? d * 40 : (d * 40) - 20) : (d * 40) - 50
}
