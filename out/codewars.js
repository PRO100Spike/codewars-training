function solution(str){
    let result = [];
    console.log(str.length);
    for (let i = 0; i < str.length; i+=2) {
      result.push(str[i] + (str[i + 1] ? str[i + 1] : '_') );
    }
  return result;  
}

function bouncingBall(h,  bounce,  window) {
  let newH = h * bounce;
  if (h <= 0 || bounce < 0 || bounce > 1 || window > h || newH < window) {
    return -1
  }
  return h < window ? -1 : 2 + bouncingBall((h * bounce), bounce, window);
}

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var beforeMaxItem = 0, beforeMaxItemIndex = 0,  maxItemIndex = 0, maxItem = 0, volume;
  
  for (let i=0; i < height.length; i++) { 
      if (height[i] >= maxItem) {
          beforeMaxItem = maxItem;
          beforeMaxItemIndex = maxItemIndex;
          maxItem = height[i];
          maxItemIndex = i;
      }
  }
  console.log('maxItem: ', maxItem, '\nbeforeMaxItem: ', beforeMaxItem)
  
  return beforeMaxItem*(maxItemIndex - beforeMaxItemIndex);
};

/*
 * @param {Object} recipe
 * @param {Object} available
 * @return {number}
 */
function cakes(recipe, available) {
    let count = [];
    Object.keys(recipe).forEach((item) => {
        if (available[item] === undefined || available[item] < recipe[item]) {
            return count = [0]
        }
        count.push(Math.floor(available[item] / recipe[item]))
    })
    return Math.min.apply(null, count)
}
const str = true, str1 = true, str2=false;

console.log(Boolean(str && str1 && str2))

setTimeout( function(){
    console.log(1);
})


console.log(2)

