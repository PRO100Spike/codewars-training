/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var beforeMaxItem = 0, beforeMaxItemIndex = 0,  maxItemIndex = 0, maxItem = 0, volume = 0, maxVolume = 0;
    for (let i=0; i < height.length; i++) {
        for (let j=height.length - 1; j > i; j--) {
            volume = (j - i) * Math.min(height[i], height[j]);
            if (volume > maxVolume) {
                maxVolume = volume;
            }
        }
    }

    return maxVolume;
};

/**
 * TODO: need fix this
 * @param {number[]} height
 * @return {number}
 */
var maxAreaOn = function(height) {
    var beforeMaxItem = 0, beforeMaxItemIndex = 0,  maxItemIndex = 0, maxItem = 0, volume;

    for (let i=0; i < height.length; i++) {
        if (height[i] >= maxItem) {
            beforeMaxItem = maxItem;
            beforeMaxItemIndex = maxItemIndex;
            maxItem = height[i];
            maxItemIndex = i;
        }
    }

    return beforeMaxItem*(maxItemIndex - beforeMaxItemIndex);
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxAreaOn([1,8,6,2,5,4,8,3,7]));