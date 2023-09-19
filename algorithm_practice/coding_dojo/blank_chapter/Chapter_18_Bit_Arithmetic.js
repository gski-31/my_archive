// Algorithm Challenges
// The Dojo Collection
// Chapter_18_Bit_Arithmetic

//  Decimal to Octal Practice
// For practice, convert the following from decimal to octal representation. Example: 31 becomes 0o37.
// 13 6 25 8 45 10 -9 64 255

//  Octal to Decimal Practice
// For practice, convert the following from octal to decimal. Example: 0o47 becomes 39.
// 0o610 0o5 0o26 0o47 0o302 0o0 -0o12 0o76 0o101

//  Decimal to Octal String
// Create a function dec2OctStr(value) that converts a number into a string representing that number in octal notation. For this challenge, do not use the (very convenient) toString function.

//  Octal String to Value
// Create a function octStr2Val(str) that accepts a string representing an integer in octal notation, and returns the value. For this challenge, do not use the (very convenient) parseInt function.

//  Decimal to Hexadecimal
// For practice, convert the following from decimal to hexadecimal. Example: 31 becomes 0x1F.
// 13 6 25 8 45 10 -9 64 255 238

//  Hexadecimal to Decimal
// For practice, convert the following from hexadecimal to decimal. Example: 0x47 becomes 71.
// 0xDB 0x5 0x20C 0x4F 0xB2 0x0 -0x12 0x7E 0x101

//  Decimal to Hexadecimal String
// Create a function dec2HexStr(value) that converts a number into a string representing that number in hexadecimal notation. For this challenge, do not use the (very convenient) toString function. For example, given the value 108, the function should return "0x6C".

//  Hexadecimal String to Value
// Create a function hexStr2Val(str) that accepts a string representing an int in hexadecimal notation, and returns the value. For this challenge, do not use the (very convenient) parseInt function. For example, given the string "0x1D2", the function should return 466.

//  Decimal to Binary
// For practice, convert the following from decimal to binary. Example: 117 becomes 0b1110101.
// 13 6 25 8 45 10 -9 64 255 128 35 0 198

//  Binary to Decimal
// For practice, convert the following from binary to decimal. Example: 0b100111 becomes 39.
// 0b10100101 0b111 0b1111000 0b110110 0b000 0b11
// -0b1010 0b100110 0b1010101010 0b111001 0b100101

//  Decimal to Binary String
// Create a function dec2BinStr(value) that converts a number into a string representing that number in binary notation. For this challenge, do not use the (very convenient) toString function. For example, given the value 35, the function should return "0b100011".

//  Binary String to Value
// Create a function binStr2Val(str) that accepts a string representing an int in binary notation, and returns the value. For this challenge, do not use the (very convenient) parseInt function. For example, given the string "0b1010101", the function should return 85.

// Ready for a bit of a break from bits? Here is a completely unrelated (difficult!) challenge, if you wish:

//  Reorder Word Fragments
// You are given an array of equal-length strings containing lowercase alphabetical characters or ‘?’. Reorder the words so that from word to word, each letter is in alphabetical order (first letters are in order, second letters are in order, etc). The ‘?’ can represent any letter needed to satisfy this. Return the array in this order, with ? converted into the alphabetically earliest possible letter. Return null if the ordering is impossible. Given ["XD?E","BDE?","?A?E"], return ["AAAE","BDEE","XDEE"]. For ["BQX?","XD?E"], return NULL because first letters require a different order than second letters allow.

// Second: Ensure you minimize every word. For ["S?","?Q"], return ["AQ","SQ"] not ["SA","SQ"].

//  Bitwise AND
// 0b010101 & 0b011011157 & 870b01101001 & 0b000110000xBABE & 0xBEEF

//  Bitwise OR
// 0b010101 | 0b011011157 | 870b01101001 | 0b000110000xBABE | 0xBEEF

//  Bitwise NOT
// ~0b010101~0b0110111~5787~0b01101001~0b00011000~0xBABE ~0xBEEF

//  Bitwise XOR
// 0b010101 ^ 0b011011157 ^ 870b01101001 ^ 0b00011000
// 0x0BADCACA ^ 0xD00DAD0xCAFED00D ^ 0xDECAF123 ^ 124

//  Bitwise LSL
// 0b010101 << 757 << 80b01101001 << 0b00000111
// 0xF00D << 0xA0x000BABEE << 0b142 << 0xA

//  Bitwise LSR
// 0b0101010101 >>> 7157 >>> 30b10110100101010011 >>> 15
// 0b00011000 >>> 20xDEADBEEF >>> 0xA0xCAFEBABE >>> 0b11

//  Count in Binary
// Given integer representing the number of bits, recursively print strings that count, in binary representation, from 0 up to the max number representable by that number of bits.

//  Count Set Bits
// Given integer, return how many bits are set to 1. For an input of 1023 (0x3FF), return 10. Given the value 8192 (0x2000), return 1.

// Second: can you make it O(s), where s is the number of set bits?

//  Encode Bytes to 32
// Given four values between 0-255, encode them into a 32-bit integer. First should map to most significant 8 bits. Given [0xF0, 0xC3, 0x96, 0x59], return 4039349849 (0xF0C39659).

//  Reverse Bits
// Given a 32-bit unsigned integer, reverse its bits and return this value. If you are given the value 0b01100110011001101111000011110000, then your function should return the value 0b00001111000011110110011001100110.

//  Decode 32 to Bytes
// Given 32-bit integer, return a set of values for the four bytes in the integer. Given 306542763 (which in hex is 0x124578AB), return [0x12, 0x45, 0x78, 0xAB].

//  Byte Array
// With encode/decode you’ve written above, create a ByteArray data structure to store 8-bit values encoded into 32-bit ints to save space. Build set(index, value) and get(index).

//  Encode Bit Num
// Given bit val, bit number, and 32-bit val, mask bit into 32-bit val and return new val. For (1,22,1) return 0x400001; for (0,3,0x18) return 0x10.

//  Bit Array
// With encode/decode functions you’ve written above, create a BitArray class that stores 1-bit values encoded into 32-bit integers. Include methods set(index,val) and get(index).

//  Decode Bit Num
// Given bit number and 32-bit value, return val of referenced bit number. For(30,0x4FFFFFFF), return 1. For (3,0x4FFFFFF7), return 0.

//  Radix Sort2
// Implement RadixSort, based on powers of two instead of digit numerals 0-9. Sort by lowest significant bit, then next least significant bit, etc. What is the big-O runtime to sort 32-bit integers?

//  Sprinklers
// The Rockefeller country estate is watered by a 28-head sprinkler system. Create a function to return a 28-bit number; a landscape microcontroller calls the function each minute to determine which heads to enable. Only one sprinkler can run at a time; each runs 20 minutes a day. Four global variables alter system behavior, in increasing priority: RAIN_SENS is a precipitation meter – if true, disable all heads. SENS_OVERRIDE, if true, disables the precipitation meter. While SYS_TEST is true, cycle through all 28 sprinklers for 1 minute each. Finally, if SYS_DISABLE is true, turn off all sprinklers.

//  LED Encoding
// Classic LEDs have seven segments that are individually turned on or off to produce the desired letter or numeral, arranged as in diagram at right. Each segment’s on/off state will be determined by a different bit in a container byte (bits numbered at right). Value 0x7B signifies that segments [0,1,3,4,5,6] would be enabled, which would display numeral ‘6’. Build function LED2Numeral(ledByte) that accepts a byte representing the states of LED segments in one base-10 numeral, returning the numerical value of that base-10 numeral (i.e. 0-9). Given the input 36 (0x24, segments 2 & 5), return 1.

// Second: create function Int2LED(value) that accepts a 16-bit integer value and translates it into the values needed to produce the corresponding LED readout in base-10. The function should return an array of five bytes: each byte representing one of the numerals from least-significant to most-significant. Using our examples above, LEDBytes(85210) == [0,36,93,107,127].

//  Where’s the Bug? (bitwise operators version)
// // How many bugs can you find?

// function numSetBits(num) { // count num of set bits in a 64-bit val
// while (num) { bitCount = bitCount + num && 0x1; num = num >> 1; }
// return bitCount;
// }

