// Algorithm Challenges
// The Dojo Collection
// Chapter_08_Linked_Lists_Part_II

//  SList: Reverse
// Reverse the node sequence. Given an SList object, the .head property should point to the previously-last node, and the rest of the nodes should follow similarly from back to front.

//  SList: Kth-Last Node
// Given k, return the value that is ‘k’ nodes from the list’s end. If given (list,1), return the list’s last value. If given (list,4), return the value at the node that has exactly 3 nodes following it.

//  SList: Is Palindrome
// Return whether a list is a palindrome. String palindromes read the same front-to-back and back-to-front. Here, compare node values. N.B.: to be accurate in JavaScript, use === instead of ==, since 1 == true == [1] == "1".

// Second: you may not have plentiful memory. Can you solve this without an additional array?

//  SList: Shift Right
// Given a list, shift nodes to the right, by a given number shiftBy. These shifts are circular: when shifting a node off list’s end, it reappears at list’s start. For list a=>b=>c, shift(1) should return c=>a=>b.

// Second: also handle negative shiftBy (to left).

//  SList: Sum Numerals
// You are given two lists, each representing a number. Every node value is a 0-9 digit, with first node representing least significant digit. Return a new list representing the sum. Given 2=>0=>1 & 8=>4, return 0=>5=1 because 102 + 48 = 150.

// Second: what if first node is most significant?

//  SList: Setup Loop
// In preparation for tomorrow, create a sequence of slNodes that form a closed loop. Your function’s first argument should signify how many nodes total, and the second should be which node number is pointed to by the last node. Give nodes sequential numbers as values, for clarity. Calling setupLoop(5, 3) should return a circular list of 1=>2=>3=>4=>5=>3=>4=>5=>3....

//  SList: Flatten Children
// Why limit nodes to contain only one pointer? In this challenge, each node has .next, but also .child that is either null or points to another head. In turn each child node could point to another list. Don’t alter .child; arrange .next pointers to ‘flatten’ the hierarchy into one linear list, from head through all others via .next.

//  SList: Unflatten Children
// Take the output from your “flatten child lists” function (a linear linked list containing nodes with .child pointers), and restore it to its original state. Do you need to change your flatten function to enable this?

// Second: for flatten & unflatten, in the case of really complex inputs, how many nested FOR (or WHILE) loops might you have? Can you solve without nested loops, even for complex inputs?

//  SList: Has Loop
// Ben sends linked lists to Emma, but she doesn’t quite trust him. Is he trying to make her code spin infinitely? Given a linked list, determine whether it has a loop, and return a boolean accordingly.

//  SList: Break Loop
// Even better than finding where the loops start would be to just fix them. You will be given a potentially loopy list; determine whether there is a loop, and if so, break it. Retain all nodes, in original order.

//  SList: Loop Start
// For Emma to expose Ben’s nefarious intentions, she needs to locate the loops. Given a linked list, return a pointer to the node where a loop begins (where the last node points), or null if no loop.

//  SList: Number of Nodes
// Given a linked list with or without a loop, return total number of nodes. Given circular list k=>e=>l=>v=>i=>n=>l=>v=>..., return 6.

//  SList: Swap Pairs
// Given a singly linked list, rearrange the nodes so that successive pairs of nodes are swapped in sequence. If list has an odd number of nodes, the final node (not part of a pair) should be unchanged. For mySList a=>b=>c, mySList.swapPairs() should change the mySList object to b=>a=>c.

// For mySList a=>b=>c=>d, mySList.swapPairs() should change it to b=>a=>d=>c.

//  Where’s the Bug? (SList version)
// Without peeking at previous code, how many bugs can you find in the below SList/SLNode methods?

// function SLNode(val) { this.val = value; this.next = null;}
// function SList() {
// this.head = null;
// this.back = function() {
// if (!this.head) return null;
// var runner = this.head;
// while (runner)
// { runner = runner.next; }
// return runner.val;
// }
// this.pushBack = function(value) {
// var newNode = SLNode(value);
// if (!this.head)
// { this.head = newNode; }
// else {
// var runner = this.head;
// while (runner.next)
// { runner = runner.next; }
// runner.next = newNode;
// }
// }
// this.popBack = function() {
// if (!this.head) { return null; }
// var returnVal;
// if (!this.head.next) {
// returnVal = this.head.val;
// this.head.val = null;
// return returnVal;
// }
// var runner = this.head;
// while (runner.next)
// { runner = runner.next; }
// returnVal = runner.val;
// runner.next = null;
// return returnVal;
// }
// this.pushFront = function(value) {
// var oldHead = this.head;
// this.head.next = oldHead;
// this.head = new SLNode(value);
// }
// this.popFront = function() {
// var returnVal = this.head.val;
// this.head = this.head.next;
// return returnVal;
// }
// this.contains = function(value) {
// var runner = this.head;
// while (runner) {
// if (runner.val == value)
// { return true; }
// runner = runner.next;
// }
// return false;
// }
// this.removeVal = function(value) {
// if (!this.head) { return false;}
// if (this.head.val === value)
// this.head = this.head.next;
// return true;
// var runner = this.head;
// while (runner.next) {
// if (runner.next.val!==value) {
// runner.next=runner.next.next;
// return true;
// }
// runner = runner.next;
// }
// return false;
// }

//  DList Class
// Given the above reference implementations for doubly linked node and doubly linked list, can you construct the rest of a basic DList class? This would include DList methods push(), pop(), front(), back(), contains(), and size().

// Second: implement these so that they are available as standalone functions as well as methods on both DLNode and DList classes.

//  DList: Prepend Value
// Given DList, new val, and existing val, insert new val into DList before existing val.

//  DList: Kth-to-Last Value
// Given k, return the value ‘k’ from a DList’s end.

//  DList: Is Valid
// Determine whether given DList is valid: whether next and prev pointers match, no loops, etc.

//  DList: Palindrome
// Determine whether a DList is a palindrome

//  DList: Loop Start
// Given DList that may contain a loop, return node where loop begins (or null if no loop).

//  DList: Append Value
// Given DList, new val, and existing val, insert new val into DList after existing val.

//  DList: Delete Middle Node
// Given node in the middle of a DList, remove it.

//  DList: Partition
// Given DList and partition val, perform a simple partition (no need to return the pivot index).

//  DList: Reverse
// Create function to reverse nodes in a DList.

//  DList: Break Loop
// Given DList that may contain a loop, break the loop while retaining original node order.

//  DList: Repair
// Combine previous work with a function that fixes errors found by isValid and breaks loops.

//  Short Answer Questions: DLists
// When are linked lists useful, compared to arrays? Conversely, when are arrays a better choice?
// What is the difference between SList & DList? When would I use one versus the other?
// How are DLists implemented?
// Which linked list methods are significantly different, between SLists and DLists? (these include front, back, pushFront/popFront, pushBack/popBack, min/max, contains, nextVal/prevVal, size)
// Is there such thing as an ‘unbalanced’ DList? Is there such thing as a ‘full’ DList?
// How would one check whether a DList is valid?



