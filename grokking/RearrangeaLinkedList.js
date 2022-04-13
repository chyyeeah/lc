class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  print_list() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    console.log(result);
  }
}


const reorder = function (head) {
  let prevSlow = null;
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    prevSlow = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  let second = reverse(slow);
  let first = head;
  while (first != null && second != null) {
    const nextFirst = first.next;
    first.next = second;
    first = nextFirst;
    const nextSecond = second.next;
    second.next = first;
    second = nextSecond;
  }
  if (first !== null) {
    first.next = null;
  }
}

const reverse = (head) => {
  let prev = null;
  while (head != null) {
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};


head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)
head.next.next.next.next = new Node(10)
head.next.next.next.next.next = new Node(12)
reorder(head)
head.print_list()
