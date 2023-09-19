// Algorithm Challenges
// The Dojo Collection
// Chapter_19_Trees_Part_III

//  AVL: Height
// Create height() methods for both the AVLTree and AVLNode classes.

//  AVL: Is Balanced
// Given an AVL tree whose nodes have up-to-date .balance values, create the isBalanced() methods for both AVLTree & AVLNode.

//  AVL: Remove
// Create remove(value) for the AVLTree class. Update .balance for any affected nodes, but don’t worry about rebalancing the tree.

//  AVL: Add
// Create add(value) for the AVLTree class. Update .balance for any affected nodes, but don’t worry about rebalancing the tree.

//  AVL: Rotate Left
// Create rotateLeft(node) method in the AVLTree class. First counter-rotate the child if needed, and as always update.balance attributes appropriately and inexpensively.

//  AVL: Rotate Right
// Create a rotateRight(node) method for AVLTree. Counter-rotate the ‘tall child’ first, if needed, and keep all .balance attributes appropriately and inexpensively up-to-date.

//  AVL: Balanced Add
// Using all you learned this chapter, create a balancedAdd(value) method for AVLTree class. Ensure that by the time it returns, our value is added, the tree is balanced, and all node attributes are updated and accurate.

//  AVL: Balanced Remove
// Build balancedRemove(value) for our AVLTree class. Ensure that when method returns (true if removed, false if not found), the value is removed, tree is balanced, and all node attributes are updated and accurate.

//  AVL: Rebalance
// Similar to repair() on regular BSTs, create rebalance() for AVLTrees. Just as repair() is not really needed (since we expect BSTs to insert and delete nodes correctly and never become invalid), similarly we could argue that rebalance() is unneeded since an AVLTree will continually keep itself balanced. Nonetheless, quickly build this, using other methods you’ve already created.

//  RBTree and RBNode Class Definitions
// Create the simplest possible class definitions of RBTree and RBNode.

//  Red-Black Tree: Add
// Create the add(val) method on the RBTree class. As needed, repaint and/or rebalance; this is a self-balancing method.

//  Red-Black Tree: Contains
// Create a contains(value) method for RBTree. Is this function interesting?

//  Red-Black Tree: Remove
// Create the RBTree’s remove(val) method. As needed, repaint and/or rebalance nodes; this is a self-balancing method.

//  Short-Answer Questions on AVL and Red-Black Trees
// Self-balancing seems like a lot of work. When are costs justified? When are they not justified?
// Between AVL trees and Red-Black trees, which incurs more rebalancing cost?
// How would shapes of AVL trees and Red-Black trees generally differ (if at all)?
// What are the performance differences between these trees?
// When would you choose AVL tree over Red-Black, and vice-versa?
// Between AVL, Red-Black and binary search trees, which height() implementation would generally be fastest, given a large diverse data set? What is its big-O for runtime?

//  Splay Tree Class Definitions
// Create the simplest possible SplayTree class definition. Do you need a SplayNode?

//  Splay Tree: Add
// Create the add(value) method on the SplayTree class, splaying the new node.

//  Splay Tree: Contains
// Create a contains(value) method for SplayTree, splaying as needed.

//  Splay Tree: Remove
// Create a remove(value) method for SplayTree, splaying as needed.

//  Short-Answer Questions on Splay and Self-Balancing Trees
// How would shapes of Splay, AVL, Red-Black and BST trees generally differ (if at all)?
// What are the performance differences between Splay trees and BSTs?
// When would you choose Splay trees over AVL or Red-Black?
// Compare the likely performance of height() across Splay, Red-Black and BST.
// For the most recently accessed item in a Splay Tree, what is the big-O to remove it?

