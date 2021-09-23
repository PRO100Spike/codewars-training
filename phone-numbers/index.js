/* Might be useful :*/
function Node(value) {
  this.value = value
  this.nextNode = null

  this.addNextNode = function (node) {
    this.nextNode = node
  }

  this.hasValueInRoot = function (value) {
    if (typeof value === 'object') {
      let hasValue = flase
      value.filter(el => console.log(el))
      /*map(el => {
        if (el.value === value) hasValue = true
      })*/
      return hasValue
    }
    return this.value === value
  }

  /*this.expandNextNode = function (node) {
    let expandNextNode = new Map()
    expandNextNode.set(+this.value, this.nextNode)
    expandNextNode.set(+node.value, node)
    this.nextNode = expandNextNode
  }

  this.incrementAllChild = function () {
    this.allChild++
  }

  this.getAllChild = function () {
    let count = 0
    let curentNode = this
    while (typeof curentNode === 'object' && curentNode !== null) {
      count++
      //debugger
      curentNode = curentNode.nextNode
    }
    return count
  }*/
}


function printTree(node) {
  let a = true
  let tree = ''
  let currentRoot = node
  let currentNode = node
  let i = 0
  while (a) {
    if (currentNode) {
      tree += currentNode.nextNode !== null ? currentNode.value + ' - ' : currentNode.value
      currentNode = currentNode.nextNode !== null ? currentNode.nextNode : null
    }
    i++
    a = i < 15
  }
  return tree
}

function phoneNumber(phoneNumbers) {
  //count the nodes !
  let phoneBook = []

  phoneNumbers.map((phone, i) => {
    let curentNode, prevNode = null;

    if (phoneBook.length) {
      phoneBook.map(node => {
        if (node.value === phone[0])
          curentNode = node
      })
    } else {
      curentNode = new Node(phone[0]);
    }

    for (let i = 0; i < phone.length; i++) {
      if (curentNode.value) {
        if (i === 0) {

        } else {
          if (curentNode.hasValueInRoot(phone[i])) {

          }
        }
      } else {
        curentNode.value = phone[i]
      }

      if (i !== phone.length - 1) {
          curentNode.addNextNode(new Node())
      }

      prevNode = curentNode;
      curentNode = curentNode.nextNode;
      /*
      if (i === 0) {
        if (!phoneBook.has(phone[i])) {
          curentNode = new Node(phone[i]);
          phoneBook.set(phone[i], curentNode);
        } else {
          curentNode = phoneBook.get(phone[i]);
        }
        rootNode = curentNode;
      } else {
        if (curentNode.nextNode) {
          if (phone[i] === curentNode.nextNode.value) {
            curentNode = curentNode.nextNode;
          } else {
            prevNode = curentNode;
            curentNode = new Node(phone[i]);
            prevNode.expandNextNode(curentNode);
          }
        } else {
          prevNode = curentNode;
          curentNode = new Node(phone[i]);
          prevNode.addNextNode(curentNode);
        }
      }
      */
    }
  })

  console.log('tree:', phoneBook, printTree(phoneBook))
}

phoneNumber([
  '0123456789',
  '0123987654',
  '0123987456',
  //'2365498756',
  //'2365498765'
])
/*
              4 - 5 - 6 - 7 - 8 - 9
            / 
0 - 1 - 2 - 3           4 - 5 - 6
            \          /
              9 - 8 - 7 
                      \
                       6 -5 - 4
                              5 - 6
                             /
2 - 3 - 6 - 5 - 4 - 9 - 8 - 7
                            \
                              6 - 5
*/
// = 19
