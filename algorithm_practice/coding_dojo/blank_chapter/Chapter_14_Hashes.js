// Algorithm Challenges
// The Dojo Collection
// Chapter_14_Hashes

//  Hash: Add
// Create an add(key, val) method on HashMap to add a new key and value to the map. This entails hashing key, mod’ing it into the size of your array, and placing the value there.

// Second: If two values hash to the same index, it causes a hash collision. Then, you should use a secondary array or SList instead of overwriting (losing) values. Do you still have to worry about hash collisions if you have a set, not a multiset?

//  Hash: Is Empty
// Dude, what if you use a HashMap to find your hash cache, but someone stole it all? Bummer. Return whether this HashMap is empty. This is a one-liner but requires changes elsewhere.

//  Hash: Find Key
// Create a find(key) method to return value for given key. If key is not found, return null.

// Second: if you altered add(key,val) to handle collisions, extend find(key) accordingly.

//  Hash: Remove
// Create HashMap method remove(key) that finds key, removes key/value pair, and returns the value (or null if key not found in our map).

//  Hash: Grow
// Write a method grow() to increase the internal array of buckets by 50% (20-element array would become 30 elements). Afterward, rehash all keys, since your mod factor has changed....

//  Hash: Add
// Create addMap(HashMap) that accepts another HashMap of key-value pairs and adds each pair to the existing map. For duplicate keys, new values overwrite old ones.

// Second: incorporate a boolean input indicating whether new keys should overwrite existing.

//  Hash: Load Factor
// We may eventually want to grow our array size. Create HashMap method loadFactor() to return an elements/buckets ratio to monitor this.

//  Hash: Set Size
// Write a method setSize(newCap) to set the capacity of the internal bucket array to a specific length. As with grow(), after changing the array length, you must rehash all keys.

//  Hash: Select Keys
// Create method selectKeys(keyArray) to accepts an array of keys. Reject those keys in the existing map that are NOT in that array. If your map contains {"cool":"Pariece", "smart":"Pariece", "tall":"Kareem"}, then map.selectKeys(["cool","smart"]) should change map to {"cool":"Pariece", "smart":"Pariece"}.

//  Making Maps into Sets or Multimaps
// We have previously mentioned both maps and sets. Sets are unordered collections of data, without any identifying label or index. You could think of a set as a map that has only keys. Today, we will change our HashMap data structure into a HashSet data structure, and even a HashMultiSet data structure.

//  Short Answer Questions: Unordered Data Structures
// Describe what is meant by an unordered data structure.
// Is there more than one type of unordered data structure? Why would I use each of these?
// How are unordered maps commonly implemented? What is the underlying structure’s name?
// What is the sequence of steps taken, when adding a value to an unordered set?
// What is the sequence when checking whether a given key exists in an undered map?
// Likewise, what steps are taken when removing a value from an unordered set?
// How would one check the validity of an unordered map?
// For an unordered set containing the following methods – add, remove, min, max, removeMin, removeMax, contains, prevVal, nextVal, size – which methods are considered fast? How fast?
// Likewise, which of these are considered relatively slow? Why are they slow? How slow?
// Is there such thing as an ‘unbalanced’ unordered map? What should we do at that point?
// Can unordered maps get ‘full’? What should we do at that point?

//  Short Answer Questions: Ordered Data Structures
// Describe what is meant by an ordered data structure.
// Is there more than one type of ordered data structure? Why would I use each of these?
// How are ordered maps commonly implemented? What is the underlying structure’s name?
// What is the sequence of steps taken, when adding a value to an ordered set?
// What is the sequence when checking whether a given key exists in an dered map?
// Likewise, what steps are taken when removing a value from an ordered set?
// How would one check the validity of an ordered map?
// For an ordered set containing the following methods – add, remove, min, max, removeMin, removeMax, contains, prevVal, nextVal, size – which methods are considered fast? How fast?
// Likewise, which of these are considered relatively slow? Why are they slow? How slow?
// Is there such thing as an ‘unbalanced’ ordered map? What should we do at that point?
// Can ordered maps get ‘full’? What should we do at that point?

