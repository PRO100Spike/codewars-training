function inBalanced(value:string):boolean {
  let countRoundBraces:number = 0;
  let countSquareBraces:number = 0;
  let countMustacheBraces:number = 0;
  for(let i =0; i < value.length; i++) {
    if (value[i] === '{')
      countMustacheBraces++;
    if (value[i] === '[')
      countSquareBraces++;
    if (value[i] === '(')
      countRoundBraces++
    if (value[i] === '}')
      countMustacheBraces--
    if (value[i] === ']')
      countSquareBraces--;
    if (value[i] === ')')
      countRoundBraces--;
    if (countMustacheBraces < 0 || countSquareBraces < 0 || countRoundBraces < 0)
      break
  }
  return !!countMustacheBraces || !!countRoundBraces || !!countSquareBraces
}
