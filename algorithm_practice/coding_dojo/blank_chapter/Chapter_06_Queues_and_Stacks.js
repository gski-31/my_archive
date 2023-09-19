// Algorithm Challenges
// The Dojo Collection
// Chapter_06_Queues_and_Stacks

//  SLQueue: Enqueue
// Create SLQueue method enqueue(val) to add the given value to end of our queue. Remember, SLQueue uses a singly linked list (not an array).

//  SLQueue: Front
// Create SLQueue method front() to return the value at front of our queue, without removing it.

//  SLQueue: Is Empty
// Create SLQueue method isEmpty() that returns whether our queue contains no values.

//  SLQueue: Compare Queues
// Given two SLQueue objects, create a standalone function that returns whether they are equal. Queues are equal only if they have equal elements in identical order. Allocate no other object, and return the queues in their original condition upon exit.

//  SLQueue: Dequeue
// Create SLQueue method dequeue() to remove and return value at front of queue. Remember, SLQueue uses singly linked list (not array).

//  SLQueue: Contains
// Create method contains(val) to return whether given value is found within our queue.

//  SLQueue: Size
// Create SLQueue method size() that returns the number of values in our queue.

//  SLQueue: Remove Minimums
// Create a standalone function to remove an SLQueue’s lowest value, otherwise leaving values in the same sequence. Use only local variables; allocate no other objects. Remove all duplicates of this value.

// Bonus: Remove only the last minimum value. Convert [7,2,5,2,4] to [7,2,5,4].

//  SLQueue: Interleave Queue
// Reorder SLQueue values to alternate first half values with second half values, in order. For example: (1,2,3,4,5) becomes (1,4,2,5,3). You may create one additional SLQueue, if needed.

//  ArrStack: Push
// Create push(val) that adds val to our stack.

//  ArrStack: Top
// Return (not remove) the stack’s top value.

//  ArrStack: Is Empty
// Return whether the stack is empty.

//  ArrStack: Pop
// Create pop() to remove and return the top val.

//  ArrStack: Contains
// Return whether given val is within the stack.

//  ArrStack: Size
// Return the number of stacked values.

//  SLStack: Push
// Create push(val) that adds val to our stack.

//  SLStack: Top
// Return (not remove) the stack’s top value.

//  SLStack: Is Empty
// Return whether the stack is empty.

//  SLStack: Pop
// Create pop() to remove and return the top val.

//  SLStack: Contains
// Return whether given val is within the stack.

//  SLStack: Size
// Return the number of stacked values.

//  Compare Stacks
// Given two Stack objects, create a standalone function to return whether they are equal. Stacks are equal only if they have equal elements in identical order. You can use an additional third Stack for storage; you will need it because you must return the given Stacks to their original condition upon exit.

//  Stack: Copy
// Given a Stack, create a new second Stack and copy values from first Stack into second Stack, so they pop in same order. Use only one Queue for additional storage, and only public Stack/Queue interfaces.

//  Create Queue Using Two Stacks
// Using only two Stack objects for the underlying data storage, recreate a Queue class.

//  Queue: Is Palindrome
// Given a Queue, return true if its values are a palindrome (if they are same in reverse order), else return false. Restore Queue to original state before exiting. For storage, use one additional Stack.

//  Stack / Queue Code-Sharing
// As a design exercise, think through how you would combine the SLQueue you wrote previously with the SLStack class you just created. Would you use object-oriented design? If so, which class inherits from which? Is there a parent class that is neither?

//  Deque: Implementation
// Having combined the designs of Stack and Queue, why not combine features as well. Let’s create a class Deque (pronounced ‘deck’) representing a double-ended queue. On top of the basic six methods, enable it to push and pop from opposite ends. Specifically, build class Deque with pushFront(val), pushBack(val), popFront(), popBack(), front(), back(), contains(val), isEmpty(), and size().

//  Stack: Remove Stack Min
// Remove a Stack’s minimum value, otherwise leaving values in order. If duplicate min values are found, remove them all (see below). Use only one additional Queue (plus primitive local vars) for storage.

// Bonus: Create removeNewestMin() and removeOldestMin() that remove only one min value.

//  CirQueue: Front
// Return (not remove) the queue’s front value.

//  CirQueue: Is Empty
// Return whether queue is empty.

//  CirQueue: Is Full
// Return whether queue is full.

//  CirQueue: Size
// Return number of queued vals (not capacity).

//  CirQueue: Enqueue
// Create enqueue(val) that adds val to our CirQueue, or returns false. Wrap if needed!

//  CirQueue: Dequeue
// Create CirQueue method dequeue() that removes/returns front value, or null on fail.

//  CirQueue: Contains
// Return whether given val is within the queue.

//  CirQueue: Grow
// (advanced) Create method grow(newSize) that expands a CirQueue to a new given size.

//  Reorder Absolute Queue
// Rob sees the world in clear black-and-white terms. Scott, however, is more likely to say “it depends” and see shades of grey. Create a standalone function that accepts a Queue of numbers, sequenced in absolute-value order, such as (10,-20,30,-40,50). Using only an additional Stack for storage, reorder the Queue values so that they are in increasing order, such as (-40,-20,10,30,50).

//  Stack: Partition
// Numerous values are stored in a Stack. Divide the values into a group of positive numbers and a group of zero-or-negative numbers. Rearrange the Stack’s values so that when popping, all non-positive values come before all positive numbers. The original order can otherwise be disregarded. Use only one Queue for additional storage.

//  Stack: Is Sorted
// Given a Stack containing numerical values, write a standalone function that returns a boolean to represent whether the stack’s values are sorted from smallest (at Stack top) to largest (at bottom). Use only one another Stack or a Queue (not both) for storage.

//  Stack: Switch Pairs
// Given Stack containing integers, switch successive pairs of values starting at bottom of stack. If there is an odd number of values, the top value is unaffected. For example, assuming we list top values first, Stack (1,2,3,4,5,6,7) should become (1,3,2,5,4,7,6). Use only one additional Queue for storage.

//  Stack: Mirror
// Anna has a curiosity with numbers and strings that are the same forwards and backwards. Mirror a Stack’s existing values onto itself, in reverse. Sending Stack (1,3,5,7) to your function should change it to (1,3,5,7,7,5,3,1). Use one other Stack or Queue (not both) for storage.

//  Weak Finger
// Let’s count on our fingers! Write a function to return how far you can count on one hand, continually from finger 1 to 5 then back again. However, one finger is weak and limits the number of times you can use it. You are sent the number of the weak finger, and how many times you can use it. After that, you can neither count on it nor skip it. If you count the sequence 1,2,3,4,5,4,3,2,1,2,3, you would return 11 as number of counts. Given (5,0) return 4, as you would count fingers 1,2,3,4 (stopping before first 5). Given (2,1) return 7: you’d count 1,2,3,4,5,4,3 (stopping before second 2).


//  Short Answer Questions: Queues and Stacks
// What is a Queue? When would I use one?
// What’s the best way to implement a Queue?
// Can you implement this a different way? How would you do this, and why?
// Is there such thing as ‘unbalanced’ Queue?
// For a list-based Queue that contains the following methods – push, pop, top, min, max, size, contains, prevVal/nextVal – which of these are considered relatively fast?
// Conversely, which of these methods would be considered relatively slow? How slow?
// Would you change this implementation if your list-based Queue required rapid sequential access in both the forward and reverse directions (removeFirst, removeLast)? How?
// When would a list-based Queue be considered ‘full’?
// For an array-based Queue that contains the following methods – push, pop, top, min, max, size, contains, prevVal/nextVal – which of these are considered relatively fast?
// Conversely, which of these methods would be considered relatively slow? How slow?
// Would you change this implementation if your array-based Queue required rapid sequential access in both the forward and reverse directions (removeFirst, removeLast)? How?
// When would an array-based Queue be considered ‘full’?
// What is a Stack? When would I use one?
// What is the most common underlying implementation for a Stack?
// When and why would you choose to implement this differently?
// For a Stack built with common implementation, containing the following methods – push, pop, top, min, max, size, contains, prevVal/nextVal – which methods are considered relatively fast?
// Likewise, which of these methods are considered relatively slow? How slow?
// Is there such thing as ‘unbalanced’ Stack?
// When would this type of Stack be considered ‘full’?
// Is there such thing as a hybrid Queue/Stack? Does it have a name?
// How are these most commonly implemented? Is there more than one common implementation?


//  Weekend Challenge: Stacks and Queues

// This weekend, build a card game named Fives! that makes use of Stack and Queue objects. Integrate the classes that you have created, and use queues and stacks where these make sense (and don’t use any Array objects). Your game should do the following:

// The game uses a single deck of 52 cards: four sets of 13 cards. Each set contains a card with value 1, a card with value 2, up thru value 13 (game doesn’t need suits such as “clubs”, etc).

// Allow any number of players from two to six.

// Get the number of players, plus each player’s name, via prompt().

// Each player starts with five cards. For each turn, a player must do the following three things:

// Either draw one new card from the remaining undrawn cards (if any remain), or pick up one or more consecutive cards from the pile of discards;

// Optionally, lay down a set of cards that add up to a multiple of 5 (that player would then increment his/her score by one);

// Discard from his/her hand one remaining card.

// Gameplay begins with Player 1, then the others in order, until all cards have been discarded.

// The player with the most points – the most laid-down card sets – wins.

