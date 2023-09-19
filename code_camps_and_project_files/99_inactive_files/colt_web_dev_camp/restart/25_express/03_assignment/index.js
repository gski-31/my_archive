// #Express Routing Assignment

// 1. Create a brand new Express app from scratch
// 2. Create a package.json using npm init and add express as a dependency
// 3. In your main app.js file, add 3 different routes:

// Visiting "/" should print "Hi there, welcome to my assignment!"
// ======================================================================
// Visiting "/speak/pig" should print "The pig says 'Oink'"
// Visiting "/speak/cow" should print "The cow says 'Moo'"
// Visiting "/speak/dog" should print "The dog says 'Woof Woof!'"
// ======================================================================
// Visiting "/repeat/hello/3" should print "hello hello hello"
// Visiting "/repeat/hello/5" should print "hello hello hello hello hello"
// Visiting "/repeat/blah/2" should print "blah blah"

// If a user visits any other route, print: "Sorry, page not found...What are you doing with your life?"

const express = require('express');
const app = express();

app.get('/', function(req, res, next){
    res.send('Hi there, welcome to my assignment!')
});

// app.get('/speak/pig', (req, res, next)=>{
//     res.send("The pig says 'Oink'")
// })

// app.get('/speak/cow', (req, res, next)=>{
//     res.send("The cow says 'Moo'");
// })

// app.get('/speak/dog', (req, res, next)=>{
//     res.send("The dog says 'Woof Woof!'")
// })

app.get('/speak/:animal', (req, res, next)=>{  // needs better undefined options but fits beginner exercise params
    let sounds = {
        pig: 'Oink',
        cow: 'Moo',
        dog: 'Woof Woof!'
    };
    let animal = req.params.animal;
    let message = `The ${animal} says \"${sounds[animal]}\"`;
    res.send(`${message}`);
})

app.get('/repeat/:word/:num', (req, res, next)=>{
    let word = `${req.params.word} `;
    let num = req.params.num;
    let message = word.repeat(num);
    res.send(`${message}`);
})

app.get('*', (req, res, next)=>{
    res.send("Sorry, page not found...What are you doing with your life?")
})

app.listen(3000, ()=>{
    console.log('working on 3000');
})