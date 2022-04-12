class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}


const is_palindromic_linked_list = (head) => {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = head.next;
    fast = fast.next.next;
  }
  let headOfSecondHalf = reverse(slow);
  const copyHeadOfSecondHalf = headOfSecondHalf;
  while (head != null && headOfSecondHalf != null) {
    // console.log('head', head);
    // console.log('headOfSecondHalf', headOfSecondHalf);
    if (head.value !== headOfSecondHalf.value) {
      break;
    }
    head = head.next;
    headOfSecondHalf = headOfSecondHalf.next;
  }
  reverse(copyHeadOfSecondHalf);
  // console.log('head', head);
  //   console.log('headOfSecondHalf', headOfSecondHalf);
  if (head == null || headOfSecondHalf == null) return true;
  return false;
};

const reverse = (head) => {
  let prev = null;
  let current = head;
  while (current != null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};


head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(2)

console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)

head.next.next.next.next.next = new Node(2)
// console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)
