function solution(str){
    let result = [];
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


