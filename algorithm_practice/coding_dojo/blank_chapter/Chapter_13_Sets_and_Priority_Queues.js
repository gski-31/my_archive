// Algorithm Challenges
// The Dojo Collection
// Chapter_13_Sets_and_Priority_Queues

//  Interleave Arrays
// Given two unsorted arrays, create a new array containing the elements of both, resulting in an unsorted merge of all values. When populating the new array alternate (interleave) values between the two arrays until one is exhausted, then include all of the other. Example: given [77,22,11,22] and [2,6,7,2,6,2], return [77,2,22,6,11,7,22,2,6,2].

//  Merge Sorted Arrays
// Efficiently merge two already-sorted arrays into a new sorted array containing the multiset of all values. Example: given [1,2,2,2,7] and [2,2,6,6,7], return new array [1,2,2,2,2,2,6,6,7,7].

//  Minimal Three-Array Range
// Given three separately-sorted arrays, determine the value from each array that creates the smallest range, and return the min and max of that range. All three of the arrays must have a value within the range. Example: given ([1,2,4,15],[3,10,12],[5,10,13,17,23]), return {min:3,max:5}.

//  Intersect Sorted Arrays
// Efficiently combine two sorted arrays into an array containing the sorted multiset intersection of the two. Example: given [1,2,2,2,7] and [2,2,6,6,7], return [2,2,7].

//  Intersect Sorted Arrays (dedupe)
// Efficiently combine two sorted multiset arrays into an array containing the sorted set intersection of the two. Example: given [1,2,2,2,7] and [2,2,6,6,7], return [2,7].

//  Union Sorted Arrays
// Efficiently combine two already-sorted arrays into a new sorted array containing the multiset union. Example: given [1,2,2,2,7] and [2,2,6,6,7], return [1,2,2,2,6,6,7].

//  Intersection Unsorted Arrays (in-place)
// Intersect two unsorted arrays, putting the unsorted multiset result ‘in-place’ into the first. Running ‘in-place’ also means you cannot create any data structure to hold values, such as an associative array. Given [2,7,2,1,2] and [6,7,2,7,6,2], you could change the first to [7,2,2] in any order.

//  Union Sorted Arrays (dedupe)
// Combine two sorted arrays into a new sorted array containing the union set (i.e. remove duplicates). Example: given [1,2,2,2,7] and [2,6,6,7], return [1,2,6,7].

//  Intersection Unsorted Arrays
// Intersect two arrays to create an unsorted multiset. You can use an additional data structure type if it is helpful. However, don’t alter the arrays; return a new one. Given the arrays [6,7,2,7,6,2] and [2,7,2,1,2], return a new array containing [7,2,2] in any order. Is ‘non-in-place’ easier? Faster?

//  Union Unsorted Arrays
// Return a new unsorted union multiset of two arrays; do not alter the originals. For [2,7,2,1,2] and [6,7,2,7,6,2], you could return [7,2,7,2,2,1,6,6]. How efficient can you be, for long arrays?

//  Union Unsorted Arrays (in-place)
// Put union multiset of two unsorted arrays into the first. Given ([2,7,2,1],[6,7,2,6]), change the first to include (in any order) the elements [2,7,2,1,6,6].

//  Subset Sorted Arrays
// Given two sorted arrays, return a boolean whether the second is a subset of the first. Can you use their sorted nature to your advantage?

//  Union Unsorted Arrays (no duplicates)
// Return the union set (remove any duplicates) of two unsorted arrays. Given ([2,7,2,1], [6,7,2,6]), return (in any order) [2,7,1,6].

//  Subset Unsorted Arrays
// Given two unsorted arrays, return whether second is subset of first. Solve in O(N) runtime.

// Second: can you solve this in-place? How does this affect your runtime performance?

//  My Very Own Square Root
// Write your own square root function. You may not use math functions or operators except for *, the built-in multiplier. Given an integer, you should return an integer.

// Second: accept and return floating-point numbers, accurate to two decimal places.

//  SList: Priority Queue
// We want to create a Queue data structure that keeps its elements in sorted order, so that when we call pop(), we get the first element in sorted order (rather than sequential order, like a regular FIFO queue).

// Create a PriQueue data structure by making changes to SLQueue and SLNode:

// A PriQNode class should be identical to SLNode, plus .pri, which is set by an additional argument passed to the constructor. The PriQueue push() method should accept both value and priority, and priority should be used to add the node at the right spot (instead of at queue’s end).

//  Sequencer
// Using a singly linked list priority queue object, build a system that orders and “plays” messages uses the system timestamp (get this by calling Date.now()). Create two functions that are used as follows:

// sequenceMessage([2000000000000, "Msg 4"]);
// sequenceMessage([1453506544890, "Msg 2"]);
// sequenceMessage([1453506544900, "Msg 3"]);
// sequenceMessage([1000000000000, "Msg 1"]);
// // assume current time is now 1453506544898
// playMessages(); // "Msg 1", then "Msg 2" are logged to console
// // ...assume time passes, and now current time is now 1453506544915
// playMessages(); // "Msg 3" is logged to console

// Your sequenceMessage(arr) will be sent a two-element array, containing a timestamp and a string. The timestamp is in milliseconds, and corresponds to values obtained by Date.now(). Sort messages by ascending timestamp. When playMessages() is called, console.log (in order) the strings of messages with timestamps in the past, and remove them from your list.

//  Heap: Constructor
// Create a MinHeap constructor function.

//  Heap: S
// Return the number of values in the MinHeap.

//  Heap: Contains
// Return whether a given val is within the heap.

//  Heap: Is Empty
// Return whether the heap is empty.

//  Heap: Top
// Return (not remove) the heap’s minimum value.

//  Heap: Insert
// Add the given value to our heap.

//  Heap: Extract
// Create a MinHeap method that removes the heap’s minimum value and returns it.

//  Heap: Heapify Array
// Create a heap method that accepts an array as its own, and turns it into a rule-abiding MinHeap.

//  Heap Sort
// Lance discovers with glee that if one heapifies an unsorted array, then extracts values, the array is sorted in O(NlogN) time – as fast as quick sort or merge sort, the usual winners in generalized sorting! He views this as solid proof that the Heap truly is “the crown prince of data structures.” Write a standalone function heapSort(arr) that accepts an unsorted array and uses a heap to sort it.

// Second: do this in-place without creating a second array.

//  Median of Data Stream
// With a separate function addValue(val), you will be given a continuous stream of data, one value at a time. At any moment, with reasonable performance you need to be able to return the median value. (What is reasonable performance?) Recall that the median of an even number of elements is the average of the two middle values.

//  Queue from Two Stacks
// Using only Stack objects (not other data structures such as linked lists or arrays), implement a Queue.

//  Priority Queue from Two Stacks
// Using only Stack objects (not other data structures such as lists or arrays), implement a Priority Queue.

//  Comparing Stacks/Queues to Other Data Structures
// By now we have studied a few different data structures: array, SList, DList, BST, SLQueue, CirQueue, ArrStack, Deque, PriQueue. Each of these could be built as a set instead of a multiset (rejecting duplicate values instead of accepting them). We will not require you to build all the possible variants, but below we list them for completeness. Those that are bolded are ones you’ve already built previously; those underlined are highly recommended. In most cases, creating these will require only small adjustments to code you’ve already written.

// Array (random-access multiset)
// Array without duplicates (random-access set)
// SList (forward-iterated insertable multiset)
// SList without duplicates (forward-iterated insertable set)
// DList (double-iterated insertable multiset)
// DList without duplicates (double-iterated insertable set)
// Binary Search Tree (ordered multiset)
// Binary Search Tree without duplicates (ordered set)
// SLQueue (sequential multiset)
// SLQueue without duplicates (sequential set)
// CirQueue (sequential multiset)
// CirQueue without duplicates (sequential set)
// SLStack (sequential multiset)
// SLStack without duplicates (sequential set)
// ArrStack (sequential multiset)
// ArrStack without duplicates (sequential set)
// Deque (double-sequential multiset)
// Deque without duplicates (double-sequential set)
// PriQueue (forward-ordered multiset)
// PriQueue without duplicates (forward-ordered set)
// Next chapter we’ll build these:
// Associative Array (unordered multiset)
// Associative Array without duplicates (unordered set)

//  Short Answer Questions: Sets and Priority Queues
// What is a Set data structure? What is an example of this, in the natural world?
// By default, is a set Ordered or Unordered?
// What is a Map data structure? What is an example of this, in the natural world?
// Generally, how do sets and maps differ?
// By default, do maps allow multiple keys with the same value?
// Generally, how are sets and multisets different?
// What is one good way to implement an unordered map?
// What is one good way to implement an ordered multimap?
// What is one good way to implement an ordered set?
// What is one good way to implement an unordered multiset?
// What is a Heap? How do they work generally?
// What are the advantages of using a Heap? What are the disadvantages?
// What happens ‘under the hood’ when a value is added to a Heap?
// Likewise, what’s the sequence of events when removing a Heap value?
// How can I check whether a Heap is valid?
// What is the difference between a MinHeap and a MaxHeap?
// For a MinHeap data structure that has the following methods – push, pop, min, max, removeMin, removeMax, contains, prevVal, nextVal, size – which of these are relatively fast? How fast?
// Conversely, which of these methods would be considered relatively slow? How slow?
// When would a heap be considered ‘full’?
// What is a Priority Queue, and is it at all different than a Heap? How?
// When would you use a BST instead of a Priority Queue?
// When would you use a ‘regular’ Queue instead of a Priority Queue?
// What is HeapSort, and how does it work?
// What are the Big-O requirements (run-time and space) for HeapSort?

