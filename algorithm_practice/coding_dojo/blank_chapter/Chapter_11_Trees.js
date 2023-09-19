// Algorithm Challenges
// The Dojo Collection
// Chapter_11_Trees

//  BST: Add
// Create an add(val) method on the BST object to add new value to the tree. This entails creating a BTNode with this value and connecting it at the appropriate place in the tree. Unless specified otherwise, BSTs can contain duplicate values.

//  BST: Min
// Create a min() method on the BST class that returns the smallest value found in the BST.

//  BST: Size
// Write a size() method that returns the number of nodes (values) contained in the tree.

//  BST: Contains
// Create a contains(val) method on BST that returns whether the tree contains a given value. Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.

//  BST: Max
// Create a max() BST method that returns the largest value contained in the binary search tree.

//  BST: Is Empty
// Create an isEmpty() method to return whether the BST is empty (whether it contains no values).

//  BST: Height
// Build a height() method on the BST object that returns the total height of the tree – the longest sequence of nodes from root node to leaf node.

//  BST: Is Balanced
// Write isbalanced()method to indicate whether a BST is balanced. For this challenge, consider a tree balanced when all nodes are balanced. A BTNode is balanced if heights of its left subtree and right subtree differ by at most one.

//  Array to BST
// Given an array that is sorted in ascending order, return a BST object that is height-balanced.

//  Closest Common Ancestor
// Given a BST and two contained values, return the value of the closest common ancestor node. For each node, the chain up to root (including self) represents that node’s ancestry. Return the value of the node in both ancestor chains that is closest to both.

//  Traverse BST Pre-Order
// Create bstPreOrder(BST) that prints the BST’s values, traversed pre-order.

//  BST to Array
// Create bst2Arr(BST) that outputs an array containing a BST’s values, traversed in-order.

// Second: create both bst2ArrPre and bst2ArrPost for those traversal methods.

// Third: refactor to minimize code.

//  BST: Minimum Height
// Build minHeight() method on BST that returns the minimal height – the shortest sequence of nodes from root to any leaf. How does the code compare to that of height()?

//  Traverse BST Post-Order
// Create bstPostOrder(BST) that prints the BST’s values, traversed post-order.

//  BST to List
// Create bst2List(BST) that outputs a singly linked list containing the BST values in-order.

// Second: create both bst2ListPre and bst2ListPost to traverse in those ways.

// Third: refactor to minimize code.

//  Traverse BST Pre-Order, No Recursion
// Given a BST object, console.log its values in pre-order, without using recursion.

//  BST: Remove
// Remove a given val. Return false if not found.

//  BST: Is Valid
// Construct an isValid() method on the BST object to determine whether tree has valid structure. Specifically, ensure that all nodes and values are located in the appropriate left or right subtrees. This might be trickier than it seems at first glance. What are a few helpful “invalid tree” test cases?

//  BST: Remove All
// Clear all values from the tree.

//  BST: Add Without Dupes
// Add a given value only if it is not already found. Return true if added, false otherwise. Remember our Set Theory: this changes our BST from an ordered multiset to an ordered set.

// Second: What other methods need changing, if we want our BST to be a true ‘set’? Build those.

//  Traverse BST Reverse-Order
// Create bstReverseOrder(BST) that prints the BST’s values, traversed in reverse order.

//  BST: Val Before
// Create a BST method that, given a value that may or may not be in the tree, returns the value that is most immediately smaller. Examples: for tree {2,5,8}, valBefore(3) returns 2, and valBefore(8) returns 5.

//  BTNode: Node Before
// Create a BTNode method that, given a node that is in the BST, returns a pointer to the node with the most immediately smaller value. Examples: for tree {2,5,8}, nodeBefore(node5) returns the node containing 2; nodeBefore(node8) returns the node containing 5.

//  BST: Val After
// Write a method on the BST class that returns the value immediately following the given one, even if that given value is not contained in the tree. Examples: for tree {2,5,8}, valAfter(3) returns 5; valAfter(8) returns null.

//  BTNode: Node After
// Parallel to nodeBefore, write a BTNode method that returns the node immediately following the given node (which is guaranteed to be in the tree). Examples: for tree {2,5,8}, calling nodeAfter(node2) returns the node containing 5; nodeAfter(node8) returns null.

//  BST: Closest Value
// Create BST method closestValue(val) to return the value contained in a BST that is closest to the given val. This could be the exact value (if tree contains it), or one that is greater or less than val. Take care: there is no guarantee that closest value is direct parent, grandparent, child, grandchild, etc.

//  Tree Path Contains Sum
// Given a binary tree (not necessarily a BST) containing numbers and a sum, can you determine whether the tree has a root-to-leaf path that, if you add up those nodes values, equals sum? Return a boolean. If a particular node has (for example) a left child but no right child, you can consider it a leaf.

// Second: instead of returning a boolean, return an array of all the root-to-leaf paths that equal sum.

//  BST With Parent
// Create a BTNode2 data structure (and the necessary changes for an accompanying BST2) that adds a .parent. When is it more optimal? Is it worth the trouble? Work out the changes to prove it to yourself!

//  Sum of BST Root-Leaf Numbers
// Given a binary tree (not necessarily a BST) that contains values between 0 and 9, we consider the digits encountered in order when traversing from root-to-leaf to be that path’s root-leaf number. The root-leaf path 4->2->3 represents the root-leaf number 423. Find the sum of all root-leaf numbers found in the provided binary tree.

//  Left-Side Binary Tree
// Given a binary tree, create and return an array containing the values that you would see if you metaphorically stood to the left of the tree and looked sideways at it. You will see the root, of course, plus only the leftmost of children at each level.

//  Short Answer Questions: Trees
// What is a binary tree? Are they too complex to use?
// Is there more than one kind of binary tree? Can you describe them?
// What is the most common binary tree? Why would I use this type of binary tree?
// Compared to other data structures, what advantages does it have? What disadvantages?
// What is a BST? What is the difference between a binary tree and a BST?
// How are BSTs represented in code?
// If BSTs consist of BSTNode objects, then how are BSTNodes represented in code?
// Why might it be better to be handed a BST object instead of the head BSTNode?
// What is the sequence of steps needed when adding a value to a BST?
// Likewise, what steps are needed when removing a value from a BST?
// Finally, what steps are needed when searching for a value in a BST?
// How would one check whether a BST is valid?
// For a BST containing the following methods – add, remove, min, max, removeMin, removeMax, contains, prevVal, nextVal, size – which are considered relatively fast? How fast?
// Likewise, which methods are considered slow? How slow?




