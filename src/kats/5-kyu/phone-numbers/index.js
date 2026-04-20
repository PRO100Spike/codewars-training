/* Might be useful :*/
function Node(value) {
  this.value = value
  this.nextNode = []

  this.addNextNode = function (node) {
    this.nextNode.push(node)
  }
}

function getChildrenCount(node) {
  let count = 1;
  if (node.nextNode.length !== 0) {
    node.nextNode.map(el => count+=getChildrenCount(el))
  } else if (node.nextNode.length === 1) {
    count++
  }
  return count
}

function phoneNumber(phoneNumbers) {
  //count the nodes !
  let phoneBook = [], count = 0;

  phoneNumbers.map((phone) => {
    let curentNode = null;

    if (phoneBook.length) {
      let nodeIndex = phoneBook.findIndex(node => node.value === phone[0]);
      if (nodeIndex === -1) {
        curentNode = new Node(phone[0]);
        phoneBook.push(curentNode);
      } else {
        curentNode = phoneBook[nodeIndex];
      }
    } else {
      curentNode = new Node(phone[0]);
      phoneBook.push(curentNode);
    }

    for (let i = 1; i < phone.length; i++) {
      let nodeIndex = curentNode.nextNode.findIndex(node => node.value === phone[i]);

      if (i !== phone.length - 1) {
        if (nodeIndex !== -1) {
          curentNode = curentNode.nextNode[nodeIndex];
        } else {
          curentNode.addNextNode(new Node(phone[i]));
          curentNode = curentNode.nextNode[curentNode.nextNode.length - 1];
        }
      } else {
        if (nodeIndex === -1) {
          curentNode.nextNode.push(new Node(phone[i]));
        }
      }
    }
  })
  phoneBook.map(phone => count+=getChildrenCount(phone));

  return count;
}

console.log(phoneNumber([
  '0123456789','0123987654','0123987456','2365498756','2365498765'
]))

// = 19
