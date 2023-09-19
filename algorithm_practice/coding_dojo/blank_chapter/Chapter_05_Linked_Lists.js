// Algorithm Challenges
// The Dojo Collection
// Chapter_05_Linked_Lists

//  List: Add Front
// Rudy isn’t nice: he cuts in line in front of everyone else. Given a pointer to the first ListNode and a value, create a new node, assign it to the list head, and return a pointer to the new head node.

//  List: Contains
// Sam thinks Tad might be somewhere in a very long line waiting to attend the Superman movie. Given a ListNode pointer and a val, return whether val is found in any node in the list.

//  List: Remove Front
// Ha! Rudy is getting what he deserves – kicked out of line. Given a pointer to the first node in a list, remove the head node and return the new list head node. If list is empty, return null.

//  List: Front
// Finally, Tad and Sam reach the front of the line to get movie tickets. Oh no – only one seat remains! Who was earlier in line: Tad or Sam? Return the value (not the node) at the head of the list. If list is empty, return null.

//  SList: Length
// July 20, 2013: about 5000 people wait in line for a chance to audition for American Idol. Create a function that accepts a pointer to the first list node, and returns number of nodes in that SList.

//  SList: Display
// Create display(node) for debugging that returns a string containing all list values. Build what you wish console.log(myList) did!

//  SList: Max
// American Idol seems to air singers that are the best, and a few that seem like the worst! Create function max(node) to return list’s largest val.

//  SList: Min
// Create min(node) to return list’s smallest val.

//  SList: Average
// Create average(node) to return average val.

//  SList: Back
// Create a function that accepts a ListNode pointer and returns the last value in the list.

//  SList: Remove Back
// Create a standalone function that removes the last ListNode in the list and returns the new list.

//  SList: Add Back
// Create a function that creates a ListNode with given value and inserts it at end of a linked list.

//  SList: Move Min to Front
// Create a standalone function that locates the minimum value in a linked list, and moves that node to the front of the list. Return the new list, with all nodes still present, and all (except for the new head node) in their original order.

//  SList: Move Max to Back
// Create a standalone function that locates the maximum value in a linked list, and moves that node to the back of the list. Return the new list, with all nodes still present, and all in their original order except for the node you moved to the end of the singly linked list.

//  SList: Prepend Val
// Create prependVal(ListNode,val,before) to insert a new ListNode with val immediately before the node containing before (or at end, if no node contains before). Return the new list.

//  SList: Append Val
// Create appendVal(list,val,after) that inserts a new ListNode containing given val immediately after the node containing after (or at end, if after not found). Return the new list.

//  Create SList (prompt)
// Create an SList with values entered. Use the prompt function to gather values one at a time from the user, putting each into a ListNode that you add to the end of the list. When the user hits [Cancel], return the list you have created.

//  SList: Remove Val
// Create removeVal(ListNode,val). Given a pointer to the head ListNode, remove the node with the given val. Return the new list. What will you do if val is not found?

//  SList: Split on Value
// Create splitOnVal(list,num) that, given number, splits a list in two. The latter half of the list should be returned, starting with node containing num. E.g.: splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3), and the return value will be (5=>2=>4).

//  SList: Remove Negatives
// Given a pointer to the head node of a singly linked list, remove any nodes containing negative values and return (a pointer to) the new list.

//  SList: Concat
// Given two pointers to separate linked lists, concatenate the second list to the end of the first one, and return the new list.

//  SList: Partition
// Create partition(ListNode,value) that locates the first node with that value, and moves all nodes with values less than that value to be earlier, and all nodes with values greater than that value to be later. Otherwise, original order need not be perfectly preserved. Return the new head ListNode.

//  SList: Second to Last Value
// Create a standalone function that, given a pointer to the first node in a singly linked list, will return the second-to-last value in that list. What will you return if the list is not long enough?

//  SList: Delete Given Node
// Create ListNode method removeSelf() to disconnect (remove) itself from linked lists that include it. Note: the node might be the first in a list (it won’t be the last), and you do NOT have a pointer to the previous node. Also, don’t lose any subsequent nodes pointed to by .next.

//  SList: Copy
// Given a pointer to a singly linked list, return a copy of that list. Do not return the same list, but instead make a copy of each node in the list and connect them in the same order as the original.

//  SList: Filter
// Given a headNode, a lowVal and a highVal, remove from the list any nodes that have values less than lowVal or higher than highVal. Return the new list.

//  SList: Second Largest Value
// Given a pointer to the first node in a singly linked list, return the second-largest value contained in the list.

//  Zip SLists
// Provided two pointers to independent linked lists, ‘zip’ the two lists together by alternating nodes. Start with the first list, and return the new combined list.

//  Dedupe SList
// Remove nodes with duplicate values. Following this call, all remaining nodes should have unique values. Retain only first instance of each value.

//  Dedupe SList Without Buffer
// Can you accomplish deduplication without using a secondary buffer? What are the performance ramifications? How long would you expect the function to take to finish, if it was sent an SList of length 5 million?

//  Short Answer Questions: Objects, Classes and Linked Lists
// What is an object?
// How is an object different than an associative array?
// Are local variables allocated in the memory heap or the call stack?
// What is this so-called call stack, anyway?
// And what is this memory heap. When do we use it?
// What is the difference between a class and an object?
// What is an object constructor?
// What code is needed to create new object instances?
// What is a pointer? Is this the same thing as the index of an array?
// What is null? What would typeof tell us, if given null?
// What is a Singly Linked List (SList)?
// Generally, what are the attributes within a singly linked list?
// Why is it called a Singly Linked List?
// Under what circumstances is an SList a better choice than an array?
// What would typeof tell us, if given an SList?
// What is a Singly Linked List Node (SLNode)?
// What are attributes of a singly linked list node? Do SLNodes always have only two attributes?
// How would you determine whether an SList is empty?
// What would typeof tell us, if given an SLNode?
// Are SList and SLNode objects built into JavaScript?
// What are the differences between a DList and an SList?
// What are the differences between an SLNode and a DLNode?
// Why might we use a DList instead of an SList?
// In JavaScript, what is the difference between alert() and prompt() and console.log()?
// Personally, what do you do to make your code more understandable? Why do you do this?

//  Weekend Challenge: Linked Lists

// This weekend, create an SList with nodes containing.id, .firstName and .lastName in addition to the obligatory .next. After creating SList and SLNode constructors, write code to do the following:

// Create a list and at least five unique nodes, and add the nodes to the list.

// Build a function that reorders list nodes to be alphabetized by .lastName.

// Refactor this code to accept a boolean, representing whether to sort ascending or descending.

// Now, augment the code to sort by any of these attributes, as well as ascending or descending.

// Refactor the function to sort by more than one attribute. For example, we may want to “Sort the list by last name (ascending), using ID (descending) as a tiebreaker if last names are equal.”

// Is any of this challenge easier if our nodes contain a .prev in addition to a .next?



