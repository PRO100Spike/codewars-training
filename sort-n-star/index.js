// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript

function twoSort(s) {
  let sort = s.sort()
  return sort[0].replace(/(?!^)[\s\S]/g, (m) => {
    return `***${m}`
  })
}
