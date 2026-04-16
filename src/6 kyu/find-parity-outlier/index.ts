export function findOutlier(integers: number[]): number {
  // your code here
  let isEven: boolean;
  let outlier: number = NaN;
  let level: number = 0;
  let middelIndex: number = Math.floor(integers.length / 2);

  isEven =
    (integers[0] % 2 === 0 && integers[middelIndex] % 2 === 0) ||
    (integers[middelIndex] % 2 === 0 &&
      integers[integers.length - 1] % 2 === 0) ||
    (integers[0] % 2 === 0 && integers[integers.length - 1] % 2 === 0);

  const recurs = (arr: number[]) => {
    middelIndex = Math.floor(arr.length / 2);
    if (arr.length <= 2 || outlier) {
      if (isEven) {
        if (Math.abs(arr[0]) % 2 === 1) outlier = arr[0];
        if (Math.abs(arr[arr.length - 1]) % 2 === 1)
          outlier = arr[arr.length - 1];
      } else {
        if (Math.abs(arr[0]) % 2 === 0) outlier = arr[0];
        if (Math.abs(arr[arr.length - 1]) % 2 === 0)
          outlier = arr[arr.length - 1];
      }
      return;
    }

    if (isEven) {
      if (Math.abs(arr[0]) % 2 === 1) outlier = arr[0];
      if (Math.abs(arr[middelIndex]) % 2 === 1) outlier = arr[middelIndex];
      if (Math.abs(arr[arr.length - 1]) % 2 === 1)
        outlier = arr[arr.length - 1];
    } else {
      if (Math.abs(arr[0]) % 2 === 0) outlier = arr[0];
      if (Math.abs(arr[middelIndex]) % 2 === 0) outlier = arr[middelIndex];
      if (Math.abs(arr[arr.length - 1]) % 2 === 0)
        outlier = arr[arr.length - 1];
    }

    let first: number[] = arr.slice(1, arr.length / 2);
    let second: number[] = arr.slice(arr.length / 2 + 1, arr.length - 1);

    recurs(first);
    recurs(second);
  };

  recurs(integers);

  return outlier;
}
