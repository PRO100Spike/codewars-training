function maxProfit(arr: Array<number>): number {
  let minPrice: number = arr[0];
  let maxProfit: number = 0;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (current < minPrice) {
      minPrice = current;
    }

    if (current - minPrice > maxProfit) {
      maxProfit = current - minPrice;
    }
  }

  return maxProfit;
}
