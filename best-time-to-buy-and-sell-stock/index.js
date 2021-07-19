function maxProfit(arr) {
    var minPrice = arr[0];
    var maxProfit = 0;
    for (var i = 0; i < arr.length; i++) {
        var current = arr[i];
        if (current < minPrice) {
            minPrice = current;
        }
        if (current - minPrice > maxProfit) {
            maxProfit = current - minPrice;
        }
    }
    return maxProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
