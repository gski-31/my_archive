// Object-Oriented JavaScript
// Working with Object Literals

// --------------------------------------- >
// Challenge 1/1
// --------------------------------------- >

// Create a function that accepts two inputs (name and age) and returns an object. Let's call this function makePerson. This function will:
// create an empty object
// add a name property to the newly created object with its value being the 'name' argument passed into the function
// add an age property to the newly created object with its value being the 'age' argument passed into the function
// return the object

function makePerson(name, age) {
  let newObject = {};
  newObject.name = name;
  newObject.age = age;
  return newObject;
}

var vicky = makePerson('Vicky', 24);

// ********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

// --------------------------------------- >
// Challenge 1/3
// --------------------------------------- >
// Inside personStore object, create a property greet where the value is a function that logs "hello".

var personStore = {
  greet: function() {
    console.log("hello;")
  }
};

// // /********* Uncomment this line to test your work! *********/
// // personStore.greet(); // -> Logs 'hello'

// --------------------------------------- >
// Challenge 2/3
// --------------------------------------- >
// Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.

function personFromPersonStore(name, age) {
  let newPerson = {};
  newPerson.name = name;
  newPerson.age = age;
  newPerson.greet = function(){console.log("hello");}
  return newPerson;
}

var sandra = personFromPersonStore('Sandra', 26);

// // /********* Uncomment these lines to test your work! *********/
// // console.log(sandra.name); // -> Logs 'Sandra'
// // console.log(sandra.age); //-> Logs 26
// // sandra.greet(); //-> Logs 'hello'

// --------------------------------------- >
// Challenge 3/3
// --------------------------------------- >
// Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".
// Using the NEW keyword

function personFromPersonStore(name, age) {
  let newPerson = {};
  newPerson.name = name;
  newPerson.age = age;
  newPerson.greet = function(){console.log("hello");}
  return newPerson;
}

var sandra = personFromPersonStore('Sandra', 26);

sandra.introduce = function(){console.log(`hi my name is ${sandra.name}`);}

// // sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

// --------------------------------------- >
// Challenge 1/3
// --------------------------------------- >
// Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string 'hello'.

// function PersonConstructor() {
//   // add code here


// }


// // /********* Uncomment this line to test your work! *********/
// var simon = new PersonConstructor;
// // simon.greet(); // -> Logs 'hello'



// --------------------------------------- >
// Challenge 2/3
// --------------------------------------- >
// Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.

// function personFromConstructor(name, age) {
//   // add code here


// }

// var mike = personFromConstructor('Mike', 30);


// // /********* Uncomment these lines to test your work! *********/
// // console.log(mike.name); // -> Logs 'Mike'
// // console.log(mike.age); //-> Logs 30
// // mike.greet(); //-> Logs 'hello'

// --------------------------------------- >
// Challenge 3/3
// --------------------------------------- >
// Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]".
// Using ES6 Classes

// // add code here


// // mike.introduce(); // -> Logs 'Hi, my name is Mike'


// --------------------------------------- >
// Challenge 1/2
// --------------------------------------- >
// Create a class PersonClass. PersonClass should have a constructor that is passed an input of name and saves it to a property by the same name. PersonClass should also have a method called greet that logs the string 'hello'.

// class PersonClass {
//   constructor() {
//     // add code here


//   }

//   // add code here

// }


// // /********* Uncomment this line to test your work! *********/
// var george = new PersonClass;
// // george.greet(); // -> Logs 'hello'



// --------------------------------------- >
// Challenge 2/2
// --------------------------------------- >
// Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method, DeveloperClass should have an introduce method. When called, introduce should log the string 'Hello World, my name is [name]'.
// EXTENSION: Subclassing

// // add code here


// // /********* Uncomment these lines to test your work! *********/
// // var thai = new DeveloperClass('Thai', 32);
// // console.log(thai.name); // -> Logs 'Thai'
// // thai.introduce(); //-> Logs 'Hello World, my name is Thai'


// --------------------------------------- >
// Challenge 1/5
// --------------------------------------- >
// Create an object adminFunctionStore that has access to all methods in the userFunctionStore object, without copying them over individually.

// var userFunctionStore = {
//   sayType: function() {
//     console.log("I am a " + this.type);
//   }
// }

// function userFactory(name, score) {
//   let user = Object.create(userFunctionStore);
//   user.type = "User";
//   user.name = name;
//   user.score = score;
//   return user;
// }

// var adminFunctionStore /* Put code here */ ;

// function adminFactory(name, score) {
//   // Put code here
// }

// /* Put code here for a method called sharePublicMessage*/

// var adminFromFactory = adminFactory("Eva", 5);

// // /********* Uncomment these lines to test your work! *********/
// // adminFromFactory.sayType() // -> Logs "I am a Admin"
// // adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"


// --------------------------------------- >
// Challenge 2/5
// --------------------------------------- >
// Create an adminFactory function that creates an object with all the same data fields (and default values) as objects of the userFactory class, but without copying each data field individually.



// --------------------------------------- >
// Challenge 3/5
// --------------------------------------- >
// Then make sure the value of the 'type' field for adminFactory objects is 'Admin' instead of 'User'.



// --------------------------------------- >
// Challenge 4/5
// --------------------------------------- >
// Make sure that adminFactory objects have access to adminFunctionStore methods, without copying them over.



// --------------------------------------- >
// Challenge 5/5
// --------------------------------------- >
// Created a method called sharePublicMessage that logs 'Welcome users!' and will be available to adminFactory objects, but not userFactory objects. Do not add this method directly in the adminFactory function.


















