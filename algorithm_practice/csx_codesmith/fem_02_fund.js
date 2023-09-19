// --------------- OBJECTS ------------------->
// create objects for the Clue Game  // lists array contents

var game = {};
var culprit = "???";

game.people = ['kenobi', 'ren', 'maul', 'fett', 'bane'];
game.weapons = ['saber', 'blaster', 'staff', 'rocket'];
game.rooms = ['reactor', 'throne', 'bridge', 'bathroom', 'launch bay'];

function loopClue() {
    for (let i = 0; i < game.people.length; i++) {
        console.log(game.people[i]);
    }
}

loopClue();

// loop through and list all properties of game OBJECT
// structure = key: stuff

function gameLoop() {
    for (let key in game) { // cycles through each key in game object
        console.log("the key is " + key + " and the values are " + game[key]);  // the key is people and the values are game[people]
    }
}

gameLoop();

// --------------- LIST TRANSFORMATIONS ------------------->

// loops through objects // lists inner object contents

var moreGame = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange"
        },
        {
            name: "Rose",
            color: "red"
        }
    ]
}

// figuring out key values
for (let key in moreGame){
    console.log(key); // suspects
    console.log(moreGame[key]); // key and inner objects
}

for (let i = 0 ; i < moreGame.suspects.length ; i++){
    for(let key in moreGame.suspects[i]){
    console.log(moreGame.suspects[i][key]); // cycles through each innner value
    }
}

// destructure into two variables for colors

var supsects = [
    {
        name: "Rusty",
        color: "orange"
    },
    {
        name: "Rose",
        color: "red"
    }
]

let [colorOne, coloroTwo = [suspects[0].color, suspects[1].color];

// --------------- .forEach() FUNCTION ------------------->

// instructor didn't understand .forEach so used underscore, found this elsewhere

let people = ['kenobi', 'ren', 'maul', 'fett', 'bane'];

function opFunc(item, index, array){
    console.log(`${item} is at position ${index} in the array ${array}`);
}

people.forEach(opFunc);

// or more likely use anonymous function

let people = ['kenobi', 'ren', 'maul', 'fett', 'bane'];

people.forEach(function(item, index, array){
    console.log(`${item} is at position ${index} in the array ${array}`);
});

// loop through and caps long words

let people = ['kenobi', 'ren', 'maul', 'fett', 'bane'];

people.forEach(function(item, index, array){
    if(item.length >4){
        item = item.toUpperCase();
    }
    console.log(`${item} is at position ${index}`);
});

// test it with random array

let legoSets = {};

legoSets.starWars = [{name: "falcon", pieces: 4000}, {name: "Slave One", pieces: 3000}];
legoSets.dc = [{name: "tumbler", pieces: 2000}];

legoSets.starWars.forEach(function(index, item, array){
    console.log(`${item} is at position ${index}`);
})

















