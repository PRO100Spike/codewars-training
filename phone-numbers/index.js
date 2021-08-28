/* Might be useful :*/
function Node(number) {
  this.value = number;
  this.allChild = null;

  this.nextNode = null;
  this.addNextNode = function (node) {
    this.nextNode = node;
  };
  this.expandNextNode = function (node) {
    let expandNextNode = new Map();
    //console.log(this.nextNode.value);
    expandNextNode.set(+this.value, this.nextNode);
    expandNextNode.set(+node.value, node);
    this.nextNode = expandNextNode;
  };
  this.incrementAllChild = function () {
    this.allChild++;
  };
  this.getAllChild = function () {
    let count = 0;
    let curentNode = this;
    console.log(this, typeof curentNode, curentNode.toString());
    while(typeof curentNode === 'object') {
      count++;
      console.log(typeof curentNode === 'object', curentNode);
      debugger
      curentNode = curentNode.nextNode;
    }
    return count;
  };
}

function phoneNumber(phoneNumbers) {
  //count the nodes !
  let phoneBook = new Map();
  phoneNumbers.map((phone, i) => {
    //console.log(phone);
    let curentNode, prevNode, rootNode;
    curentNode = null;
    for (let i = 0; i < phone.length; i++) {
      if (i === 0) {
        if (!phoneBook.has(phone[i])) {
          curentNode = new Node(phone[i]);
          phoneBook.set(phone[i], curentNode);
        } else {
          curentNode = phoneBook.get(phone[i]);
        }
        rootNode = curentNode;
      } else {
        //console.log(curentNode);
        if (curentNode.nextNode) {
          if (phone[i] === curentNode.nextNode.value) {
            curentNode = curentNode.nextNode;
          } else {
            prevNode = curentNode;
            curentNode = new Node(phone[i]);
            prevNode.expandNextNode(curentNode);
          }
          /*prevNode = curentNode;
          curentNode = new Node(phone[i]);
          prevNode.expandNextNode(curentNode);*/

          /*if (curentNode.nextNode) {
          console.log(curentNode.nextNode);
          let nextNodesMap = new Map();
          nextNodesMap.set(+curentNode.nextNode.value, curentNode.nextNode);
          prevNode = curentNode;
          curentNode = new Node(phone[i]);
          nextNodesMap.set(phone[i], curentNode);
        }
        */
        } else {
          prevNode = curentNode;
          curentNode = new Node(phone[i]);
          prevNode.addNextNode(curentNode);
        }
      }
    }
  });
  console.log(phoneBook, phoneBook.get("0").getAllChild());
}

phoneNumber([
  "0123456789",
  "0123987654",
  "0123987456",
  "2365498756",
  "2365498765"
]);
/*
              4 - 5 - 6 - 7 - 8 - 9
            / 
0 - 1 - 2 - 3           4 - 5 - 6
            \          /
              9 - 8 - 7 
                      \
                       6 -5 -4
              */
// = 19
