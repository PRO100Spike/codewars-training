function twoSort(s) {
  let sort = s.sort()
  return sort[0].replace(/(?!^)[\s\S]/g, (m) => {
    return `***${m}`
  })
}
