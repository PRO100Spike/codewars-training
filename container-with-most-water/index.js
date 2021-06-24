/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var beforeMaxItem = 0, beforeMaxItemIndex = 0,  maxItemIndex = 0, maxItem = 0, volume = 0, maxVolume = 0;
    console.log('arr', height )
    for (let i=0; i < height.length; i++) {
        for (let j=height.length - 1; j > i; j--) {
            volume = (j - i) * Math.min(height[i], height[j]);
            if (volume > maxVolume) {
                maxVolume = volume;
            }
        }
    }

    console.log(maxVolume);
    return maxVolume;
};

maxArea([1,8,6,2,5,4,8,3,7]);