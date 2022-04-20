class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }

  get_list() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
};

const reverse_sub_list = function(head, p, q) {
  const falseHead = new Node();
  falseHead.next = head;
  let current = falseHead;
  let lengthOfSubList = q - p + 1;
  let left;
  while (p > 0) {
    p--;
    left = current;
    current = current.next;
  }
  let tail;
  while (lengthOfSubList > 0) {
    lengthOfSubList--;
    tail = current;
    current = current.next;
  }
  tail.next = null;
  const newTail = left.next;
  const reverseHead = reverse(left.next);
  left.next = reverseHead;
  newTail.next = current; 
  return falseHead.next;
};

const reverse = (node) => {
  let prev = null;
  while (node) {
    const next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev;
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 4).get_list()}`)
