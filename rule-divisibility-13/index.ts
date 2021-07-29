//https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/typescript
export function thirt(n: number): number {
  // your code
  let thirtN: number = 0;
  let curentN: number = n;
  let nMod10: number = 0;
  let arrN: number[] = [];
  let mod10 = 10;

  let level = 0;

  do {
    nMod10 = n % mod10;
    nMod10 = mod10 === 10 ? nMod10 : Math.floor((nMod10 / mod10) * 10);
    arrN.push(nMod10);
    mod10 *= 10;
  } while (mod10 < n * 10);

  arrN.map((itemN, index) => {
    thirtN += itemN * (Math.pow(10, index) % 13);
  });

  
  return thirtN === n ? n : thirt(thirtN);
}
