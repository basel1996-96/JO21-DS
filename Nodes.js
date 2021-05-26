class Node {
  constructor(data, link = null) {
    this.data = data;
    this.link = link;
  }
}

const nodeOne = new Node(4);
console.log(`Node 1: Data: ${nodeOne.data} and is linked to: ${nodeOne.link}`);

const nodeTwo = new Node(7);
console.log(`Node 2: Data: ${nodeTwo.data} and is linked to: ${nodeTwo.link}`);

nodeOne.link = nodeTwo;
console.log(
  `Node 1: Data: ${nodeOne.data} and is linked to: ${nodeOne.link.data}`
);
console.log(nodeOne.link);
