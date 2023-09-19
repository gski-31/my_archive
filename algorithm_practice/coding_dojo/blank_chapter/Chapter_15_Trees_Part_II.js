// Algorithm Challenges
// The Dojo Collection
// Chapter_15_Trees_Part_II

//  BST: Is Full
// Chekov keeps his data perfectly clean. I mean, per-fect-ly clean. He doesn’t just keep them balanced. He keeps a full BST at all times. Given a pointer to a BST object, return whether the BST is a full tree.

//  BST: Is Complete
// His cousin Pikov is a bit less neurotic. He does still keep everything highly balanced. He keeps his BSTs complete at all times. Given a BST object, return whether that BST is complete.

//  BST Discussion
// What is the advantage of Chekov’s approach? What is the advantage of Pikov’s approach? What about their crazy uncle Dropov, who never balances his BSTs at all – is he being negligent? Maybe there isn’t a single ‘right’ answer. So how do we know what approach is best for the situation at hand?

//  BST: Repair
// Sometimes it is hard to find good help. Oscar is working with a third-party library that receives data from outside sources and sorts it into a binary search tree. Oscar is positive the library has bugs, because sometimes the BSTs it produces don’t meet the requirements of a BST. Given a potentially invalid BST object, create a standalone function bstRepair(BST) that rearranges nodes as needed to make it valid. Return true if you repaired the BST, or false if this was not needed.

//  BST: Smallest Difference
// Given a valid BST, return the smallest difference between any two values in the tree. What are the run-time and space complexities of your solution? Would it be less efficient if BST was very unbalanced?

//  SList: Smallest Difference
// Given sorted singly linked list, return the smallest difference between values. What are the run-time and space complexities of your solution?

//  BST: Closest Value (again)
// Given valid BST and number, return the tree value closest to that number. What are the run-time and space complexities of your solution?

//  SList: Closest Value
// Given sorted SList and number, return the list value closest to that number. What are the run-time and space complexities of your solution?

//  Array: Closest Value
// Given sorted array and number, return the array value closest to that number. What are the run-time and space complexities of your solution?

//  DList: Closest Value
// Given sorted DList and number, return the list value closest to that number. What are the run-time and space complexities of your solution?

//  BST: Partition Around Value
// Create a method BST.partition(value) where a BST object partitions itself around the given value (whether or not that value is found in the tree). The BST should change itself appropriately, as well as return a new tree object containing all other nodes. Remember, the ranges of the two BST objects should not overlap (the max() of one should be less than the min() of the other).

//  BST: Partition Evenly
// Create a standalone function that, given a valid BST, partitions the tree evenly into two distinct BSTs. As in the previous challenge, change the given BST to become one of the resultant BSTs, and return the other. The two resultant trees should be valid and non-overlapping.

// Second: if we don’t pay attention to balance, the two resultant BSTs might be tall and thin. To improve performance, make both subtrees a bit more balanced before returning them.

//  BST: Reverse
// Create a standalone function that accepts a BST object and reverses it. A reversed BST has its highest values in leftmost children, and its lowest values in rightmost children (root would be unchanged).

//  BST: Kth-Biggest
// Given a valid Binary Search Tree, find the Kth-largest element contained in that tree.

// Second: if above you took advantage of the .size() method, write a version without it. If you did not use .size() originally, write a version that does.

//  Test Cases for BST2 Repair
// In the challenge following this one, we will write code to detect and repair a potentially invalid BST2. Before you start that, here is a related challenge: what test cases would you create to ensure that your solution detects and correctly fixes the possible error cases? For this challenge, a test case is a BST that you send to bst2Repair(BST2).

//  BST2: Repair
// Given a potentially invalid BST2, create standalone function bst2Repair(BST2) to detect whether it is invalid. If so, fix it and return true (if not, return false). Potential problems include incorrectly placed nodes, as well as incorrect pointers (.parent, .left, .right) that create loops, etc.

//  BST: Values for Layer
// Jeff has divided his workgroup into a perfectly balanced hierarchy, to the extent that his organizational chart looks just like a binary tree! To learn how things are going “in the trenches”, he wants to have a meeting with all the line managers, but not include their bosses. Given a BST and a layer number (starting at zero for the root), return an array containing all the values at that layer in the BST. If a BST is a full tree, what percentage of nodes are leaves? What percentage are ‘first-level managers’?

//  BST: Layer Arrays
// Given a BST, return a two-dimensional array containing all values in the BST. The outer array represents each layer (starting at zero for the root), and the inner array for each layer represents the values at that layer in the BST.



