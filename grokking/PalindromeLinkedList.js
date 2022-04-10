class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}


const is_palindromic_linked_list = (head) => {
  
  return false;
};

const reverse = (head) => {
  let prev = null;
  let current = head;
  while (head != null) {
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

console.log(reverse(head));
// console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)

// head.next.next.next.next.next = new Node(2)
// console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)
