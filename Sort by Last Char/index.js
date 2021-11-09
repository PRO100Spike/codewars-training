// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript

function last(x){
  return x.split(' ').sort((a, b) => {
    if (a[a.length-1] > b[b.length-1])
      return 1
    else if (a[a.length-1] < b[b.length-1])
      return -1
    return 0
  })
}
