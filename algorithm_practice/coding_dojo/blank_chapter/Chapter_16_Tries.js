// Algorithm Challenges
// The Dojo Collection
// Chapter_16_Tries

//  Trie: Insert
// After building simple TrieSet and TrieNode constructors, create an add method to insert a string to the set. For our purposes, assume that input strings will be letters only – no numerals or punctuation. Also, you can convert inputs to lowercase before storing them. Return false if word has already been stored (after all, it’s a TrieSet not a TrieMultiSet!), or true if insertion is successful. Tries are treelike (not a purely linear one like a linked list), so recursion at the node level is a reasonable choice.

//  Trie: Contains
// Create a TrieSet method to check whether a given string is present within the set. Again, you can assume that all inputs are letters-only; you can also convert all strings to lowercase. Return true if word is found, false if not.

//  Trie: First
// Tries are reasonable substitutes for Hashes, yet they retain order! Build a method to return trie’s first value. First means lowest-alphabetically, not earliest-added. N.B.: "Todd" comes before "toddy".

//  Trie: Last
// Return its last value. "Kelvin" comes after "kelp".

//  Trie: Remove
// Construct a method in TrieSet class that removes a given string from our set. As earlier, safely assume that all input strings will contain only letters (not numerals or punctuation). Also, lowercase all strings before storing or checking for them. When removing trie values, remember that in some cases you need to remove a terminal TrieNode. You may potentially need to remove certain ancestor intermediate nodes. Make sure to return true on a successful removal, false if string not found.

// Second: Incorporate punctuation and case-sensitivity across the TrieSet class. Suggestion: the 95 typeable characters on a keyboard have consecutive charCode values, starting with [space].

//  Trie: Size
// Return the number of values added to the TrieSet. There are two valid ways to implement this method – can you come up with both? In which usage cases would you prefer one over the other?

//  Trie: Next
// Given a string that might not be in the trie, return the contained string that is immediately subsequent. Hashes don’t do well with this, but tries can! Return null if there is no subsequent string.

//  Trie: Auto Complete
// Assume your trie is populated with a wide array of valid words. Given string (presumably what user typed so far), use your trie to rapidly return an array of words beginning with that string.

// Second: augment autoComplete(str) to accept maxResults, and return at most that many.

//  Trie MultiSet: Insert
// For this exercise, Insert increments count, adds nodes as needed and always succeeds.

//  Trie MultiSet: Size
// Size should return total (multi) count.

//  Trie MultiSet: Remove
// Remove should decrement count and eliminate nodes, returning previous count (0 if not found).

//  Trie MultiSet: Contains
// Contains should return count (0 if not found).

//  Trie MultiSet: Auto Complete
// Given an entire dictionary and a short initial string fragment, autocomplete might return a huge number of results. Let’s use the count aspect of each TrieMultiNode to denote the frequency of that word, and use this to prioritize the return results from autoComplete, so that most frequent words are listed first. In addition to the string fragment, accept maxResults, and return at most that many results.

//  Trie Map: Insert
// Insert should accept a key and a value, and should return the preexisting value (if key already existed) or null if key is new.

//  Trie Map: Contains
// Contains should return the value for the given key (null if key is not found).

//  Trie Map: Remove
// Remove deletes the given key (and value), returning true if key was found, else false.

//  Trie Map: Size
// Size is unchanged from TrieSet.

//  Trie Map: First
// First returns an object containing the key-value pair for the alphabetically-lowest key.

//  Trie Map: Last
// Conversely, Last returns the final key-value.

//  Trie Map: Next
// Given a key that may not be present, next(key) returns the subsequent key-value.


