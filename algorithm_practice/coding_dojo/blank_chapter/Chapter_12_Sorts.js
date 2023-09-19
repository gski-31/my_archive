// Algorithm Challenges
// The Dojo Collection
// Chapter_12_Sorts

//  Array: Bubble Sort
// For review, create a function that uses BubbleSort to sort an unsorted array in-place.

//  SList: Bubble Sort
// Create a function that uses BubbleSort to sort a linked list. The list nodes contain .val, .next and other attributes you should not reference.

//  Array: Selection Sort
// For review, create a function that uses SelectionSort to sort an unsorted array in-place.

//  SList: Selection Sort
// Create a function that sorts a singly linked list using selection sort. Nodes contain .val, .next and other attributes you should not reference.

//  Multikey Sort
// For this challenge, you will sort an array, however the items in the array are not simple numbers. Given an array of objects, where each object contains a .firstName and a .lastName, sort the array by both last name (primary) and first name (secondary). Lee Abbey should be sorted before Aaron Carnevale, and Aaron Carnevale should be sorted before his brother Giorgio Carnevale.

//  Array: Insertion Sort
// Create a function that InsertionSort to sort an unsorted array in-place. What is the run-time complexity? What is the space complexity?

//  Array: Combine
// Create function combineArrs(arr1,arr2) that sorts two already separately sorted arrays, placing the result back into the first provided array. Can you work completely in-place?

//  SList: Insertion Sort
// Use InsertionSort to sort singly linked lists. Only reference ListNode attributes .val and .next. What are the run-time and space complexities?

//  SList: Combine
// Create a function that combines two already-sorted linked lists, returning a sorted list with both inputs. List nodes contain .val, .next and other attributes that you should not reference.

//  SList: Merge Sort
// Use combineLists(list1,list2) to build the mergeSortList(list) algorithm for an unsorted singly linked list. What are run-time and space complexities of your solution?

//  Array: Partition
// Partition unsorted array in-place. Use arr[0] as pivot val; return idx of pivot. Input [5,4,9,2,5,3] becomes [4,2,3,5,9,5], return 4.

// Second: for pivot, use median of first, last, mid.

// Third: partition a subset, given start and end. Exclude end; default values are 0 and arr.length.

//  SList: Partition
// Partition a singly linked list. Use first element as pivot; return the new list. List nodes contain .val and .next; do not reference other attributes. For example, if you are given the following linked list: { 5=>1=>8=>4=>9=>2=>5=>3 }, you should return: { 1=>4=>2=>3=>5=>8=>9=>5 }.

//  Array: Quick Sort
// Create a function that uses yesterday’s partitionArray() to sort an array in-place. With yesterday’s code plus a very few new lines, you will implement QuickSort! What are the run-time and space complexities of your quickSortArr implementation?

//  Array: Merge Sort
// Use the combineArrs() function above to construct mergeSortArr() for an unsorted array. What are the run-time and space complexities of your mergeSortArr solution?

//  Array: Partition3
// Previous partition() implementations do not group duplicates of the pivot together. Create partition3() to keep pivot elements together; return an array containing indices for first pivot and first greater. Change [5,1,8,4,9,2,5,3] to [1,4,2,3,5,5,8,9] and return [4,6]. Note: other 5 moved next to pivot.

// Second: pick a more optimal pivot.

// Third: partition only a portion, with start and end.

//  Smarter Sorting
// For Yi’s data science dissertation, she needs a distribution graph containing billions of data points. Amazingly, she found an array containing IQs for every person on earth, and now you must sort it. All values are between 0 and 220, and the array is 7 Billion elements long. What are your run-time and space complexities?

//  Quick Sort 3
// Create a QuickSort3 function that uses Partition3 to sort an array in-place. Can you devise specific arrays that are sorted much faster with QuickSort3 than with QuickSort?

//  Master Invoice List
// Tran’s House of Trains™ is a booming online hobby store. Each department head already has a list of invoices for that group, sorted by timestamp that day. They need to put these lists together for their chief executive, Chris. What do you recommend, and what is the performance of this solution? Write a function that will do the work needed.

//  Urban Dictionary Daily Add
// On his off days, Kris volunteers at UrbanDictionary.com, because it makes him feel hip and fresh. Their collection is about 8 million words, and they receive 2000 new words a day. Because they want to keep their data hip and fresh, they incorporate any new words within minutes of submittal, re-sorting their entire collection every five minutes. Kris notices that only about 7 words are added each time they sort. He’s thinking selection sort (their current design) might not be the best choice. What do you think?

//  Pancake Sort
// Christopher Burns has successfully defied his last name, cooking a wonderful breakfast for the entire Dojo without singeing a single flapjack. Now you have a large stack of pancakes of varying sizes, ready to serve. You believe you should first sort them from smallest (on top) to widest (on bottom), as syrup pours best that way – plus, it reminds you of the Towers of Hanoi (Minh’s favorite recursive problem).

//  Radix Sort
// For an array 7 million long with values from 0 to 4 billion, how rapidly can you radix-sort it in-place? You can create a new array as large as the original. What are the run-time complexity and the space complexity of this solution, and does it depend on the values you are sorting?

//  Wiggle Sort
// A sequence of numbers is “wiggle-sorted” if the differences between each successive value always alternates between positive and negative. Equal values should not be adjacent. Given an array of numerical values, wiggle-sort the array. What is the Big-O of your run-time performance?

//  Belt Sort
// Given array of objects representing students, where each student object has .belt attribute, sort in-place so all students with same belt are adjacent, in order “none”, “yellow”, “red”, “black”, “double-black”, “triple-black” and “triple-black plus blue”. Dojo students (or their belt records) are not just numbers, so naïve sorts might not work….

//  Median of Unsorted Array
// Create a function that determines the median of an array of unsorted values. When Sosho claimed he could ‘name that tune’ in just O(N), the Dojo was all aflutter. Any solution is fine, but doing this in O(N) has been agreed-upon across the industry as an ‘interesting problem’.


