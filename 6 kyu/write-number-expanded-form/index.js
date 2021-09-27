function expandedForm(num) {
  // Your code here
  let str = num % 10 > 0 ? num % 10  + '' : '';
  let level = 0;

  const rec = (p) => {
    if (str !== '') {
      str = p % 10 > 0 ? `${(p % 10) * Math.pow(10, level + 1)} + ${str}` : str;
    } else {
      str = p % 10 > 0 ? `${(p % 10) * Math.pow(10, level + 1)}` : str;
    }
    level++;
    return p / 10 < 1 ? str : rec(Math.floor(p / 10));
  };

  rec(Math.floor(num / 10));
  
  return str;
}
