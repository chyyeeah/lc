/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let slow = fast = head;
    while (n > 0) {
        fast = fast.next;
        n--;
    }
    let dummy = new ListNode(0, slow);
    prev = dummy;
    while (fast != null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next;
    }
    prev.next = slow.next;
    return dummy.next;
};