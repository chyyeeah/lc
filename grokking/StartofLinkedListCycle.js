class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const find_cycle_start = function(head){
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let length = 1;
  fast = fast.next;
  while (slow !== fast) {
    fast = fast.next;
    length++;
  }
  fast = head;
  let ruler = length;
  while (ruler > 0) {
    fast = fast.next;
    ruler--;
  }
  slow = head;
  while (length > 0) {
    slow = slow.next;
  }
  return slow;
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)
