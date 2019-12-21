#!/usr/local/bin/node

// I GAVE UP

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  return recurse(l1, l2);
};

function recurse(node1, node2, finalList) {
  if (node1 === null || node2 === null) {
    return;
  }
  console.log(node1);
  var l1 = node1.next;
  var l2 = node2.next;
  finalList.next = new ListNode(l1.val + l2.val);
  var nodeList = recurse(l1, l2);
  console.log(nodeList);
  return finalList;
}


console.log(addTwoNumbers([2, 4, 3],[(5, 6, 4)]));
