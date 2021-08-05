// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag(str) {
  return str.trim().length && str.replace(/ /g, '').length < 140 ? '#' + str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (m, i) => {
      if (+m === 0) return ''
      return m.toUpperCase()
  }) : false;
}
