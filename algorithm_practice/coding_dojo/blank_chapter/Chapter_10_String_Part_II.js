// Algorithm Challenges
// The Dojo Collection
// Chapter_10_String_Part_II

//  String to Word Array
// Given a string of words (with spaces, tabs and linefeeds), returns an array of words. Given "Life is not a drill!" return ["Life", "is" "not", "a", "drill!"].

// Bonus: handle punctuation.

//  Reverse Word Order
// Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence. Given "This is a test", return "test a is This".

// Bonus: handle punctuation and capitalization. Example: given "Life is not a drill, go for it!" you should return "It for go, drill a not is life!"

//  Longest Word
// Create a function that, given a string of words, returns the longest word. Example: given "Snap crackle pop makes the world go round!", return "crackle".

// Bonus: handle punctuation.

//  Unique Words
// Given a string, retain words that occur only once. Given "Sing! Sing a song; sing out loud; sing out strong.", return "Sing! Sing a song; loud; strong". Punctuation is part of the word: "Sing!" is not "Sing".

// Bonus: ignore punctuation and capitalization. Ex.: given "Sing a song! Sing a song; sing out loud and strong.", return "out loud and strong".

//  String: Rotate String
// Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that amount. Example: given ("Boris Godunov",5), you should return "dunovBoris Go".

//  Censor
// Create a function that, given string and array of ‘naughty words’, returns new string with naughty words changed to “x” chars. Given ("Snap crackle pop nincompoop!", ["crack", "poop"]), you should return "Snap xxxxxle pop nincomxxxx!" (after giggling a little bit).

// Second: handle capitalization appropriately.

//  String: ionIs Rotat (Is Rotation)
// Create the function isRotation(str1,str2) that returns whether the second string is a rotation of the first. Would you change your implementation if you knew that the two were usually entirely unrelated?

//  Bad Characters

// Given two strings, the second string contains characters that must be removed from the first. Return string formed by removing any instances of those characters from the first string.

//  Genetic Marker
// Create a function that, given an array of strings and a string, returns a boolean whether the string is found anywhere in the array of strings. Note: strings found in the array might contain the ‘?’ wild-card character, signifying that it can represent any character needed in order to complete a match.

//  Optimal Sequence
// You will be given an array of strings. All of these strings are the same length, and all contain only upper-case alphabetical characters or the ‘?’ character. The ‘?’ is a single-character wild-card; you can change it into any character needed. Return the sequence of words satisfying the following constraints:

// 1) From first word to last word, each column of letters must be in alphabetical order.
// 2) All question-mark characters must be expanded into their explicit values in the return array.
// 3) If more than one solution exists, return the one with lower overall alphabetical value.
// 4) If no solution exists, return null.

// Examples: given the array ["EA?K","?RX?","GAG?"], return ["EAAK","GAGK","GRXK"].

// For the array ["?F??","W??S","??X?"], your function should return ["AAXA","AFXA","WFXS"]. For an input of ["?UD","FI?","A?E"], return null.

//  String: Dedupe
// Remove duplicate characters (case-sensitive) including punctuation. Keep only the last instance of each character. Given "Snaps! crackles! pops!", return "Snrackle ops!".

//  Index of First Unique Letter
// Return the index of the first unique (case-sensitive) character in a given string. Ex.: "empathetic monarch meets primo stinker" should return 35 (str[35] is "k").

//  Unique Letters
// Return only the unique characters from a given string. Specifically, omit all instances of a (case-sensitive) character if it appears more than once, respecting spaces and punctuation. Given "Snap! Crackle! Poop!", return "SnCrcklePp".

//  Num to String
// Create a function that converts a number into a string containing those exact numerals. For example, given 1234, return the string "1234". No, you may not use the toString() function.

// Second: include fractional values as well. Given 11.2051, return "11.2051".

//  Num to Text
// Convert an integer into the English text for the number. Given 40213, return "forty thousand two hundred thirteen".

// Second: include 4 fractional digits. Given 11.2051, return "eleven point two zero five one".

//  String: Is Permtutaoin (Is Permutation)
// Create function that returns whether second string is a permutation of first. For example, given ("mister","stimer"), return true. Given ("mister", "sister"), return false.

// Bonus: handle uppercase/lowercase.

//  String: All Permutations
// Create a function that returns all permutations of a given string. Example: given "team", return an array with the unique 24 strings including "team", "meat", "tame", "mate", "aemt", "tmea", "etam", "atme", etc. How can you know that you covered them all?

//  String: Is Pangram
// Return whether a string contains all letters in the English alphabet (upper or lower case). For "How quickly daft jumping zebras vex!", return true. For "abcdef ghijkl mno pqrs tuv wxy, not so fast!", return false.

//  String: Is Perfect Pangram
// Create a function that returns whether a given string contains all letters in the English alphabet (upper or lower case) once and only once. Note: ignore punctuation and spaces. Given "Playing jazz vibe chords quickly excites my wife.", return false. Given "Mr. Jock, TV quiz PhD, bags few lynx.", return true.

//  Best Time to Buy and Sell Stock
// Using his machine learning prowess, Uthman can perfectly predict the closing price of one specific publicly traded stock. Before using his power for good, he will raise money in the stock market. Write bestSingleBuySell(arr) to return his maximal profit from one purchase and then sale, of just one share. The given arr holds the prices at which he can make his purchase and sale. Example: given the array [6,4,6,5,9,7,6,12,2,6,11,2,4], return the maximal profit 9.

// Second: instead of a single buy/sell, let’s say he can make a series of them, but can still only hold either one or zero shares at any time. Rework your function to maximize profit, and return that profit. Example: given the array [6,4,6,5,9,7,6,12,2,6,11,2,4], return the maximal profit 23.

// Third: if he can make at most two transactions, now what is his best strategy? Rework your function. Example: given the array [6,4,6,5,9,7,6,12,2,6,11,2,4], return the maximal profit 17.

// Fourth: what if he can make at most K transactions? Given arr and K, rework your function.

//  Are Strings Loosely Interleaved
// Given three strings, return boolean whether third string is a proper (no dupes) interleaving of first two. Given ("dne","ail","daniel") return true. Given ("dne","ail","dalein") return false. For ("dne","ail","ddaanneeiill") return false.

//  All Loosely Interleaved Strings
// Given two strings, return an array containing all possible proper interleavings of those strings. Given ("ab","yz"), your function should return ["abyz","aybz","ayzb","yabz","yazb","yzab"].

// Second: Ensure no duplicates in your returned result array.

//  Make String Palindrome (Remove One)
// Given a string, return index of the first character which, if removed, converts string into a palindrome. If string is already palindromic, return -1. Given "bene" return 0 ("ene"). Given "dude" return 3 ("dud"). Given "bub", return -1. You can assume there will always be a solution, for the string provided.

//  Make String Palindrome (Add One)
// Given a string, return a character which, if added somewhere in the string, converts it into a palindrome. If string is already palindromic, return "". Given "tutu" return "u" or "t". Given "dude" return "e". Given "dad", return "". You can assume there will always be a solution, for the string provided.

//  String Encode
// You are given a string that may contain sequences of consecutive characters. Create a function to shorten a string by including the character, then the number of times it appears. For "aaaabbcddd", return "a4b2c1d3". If result is not shorter (such as "bb"=>"b2"), return the original string.

//  String Decode
// Given an encoded string (see above), decode and return it. Given "a3b2c1d3", return "aaabbcddd".

//  Shortener
// Given string and desired length, return a maximally readable string of that length, using this process:

// 0) Remove any leading or trailing spaces (or conversely, pad on both sides out to the desired length),
// 1) Capitalize each word before removing spaces between words (starting from the back),
// 2) Remove punctuation, starting from the back,
// 3) Remove lower-case letters (vowels first), from the back,
// 4) Remove upper-case letters, from the back.

// Given a string "It's a wonderful life, Beth! ", desired outputs for the following lengths are:

// 33 " It's a wonderful life, Beth! "
// 26 "It's A WonderfulLife,Beth!"
// 22 "It'sAWonderfulLifeBeth"
// 17 "ItsAWonderflLfBth"
// 12 "ItsAWndrflLB"
// 3 "IAW"

//  Weekend Challenge: Strings, Part II (Search with Regex)
// Remember a few weeks ago when we recreated JavaScript’s built-in String methods? Let’s add a powerful new feature to String.search(val). As you recall, this method searches string for a given val (another string), and returns the index position of the first match found (-1 if not found).

// Your weekend challenge: regular expression support! Below are a few examples how this should work: "dude".newSearch("[q-z]") should return 1. "dude".newSearch("(ud)") should return 1. "dude".newSearch("[^a-e]") should return 3. "dude".newSearch("d$") should return -1.

// This is a very difficult (weekend-level) challenge and will require additional research. Are you up for it?



