/*
const book = {
    title: 'my book',
    author: 'me'
}

// JSON.stringify => Convert object to JSON
let bookJSON = JSON.stringify(book);
console.log(bookJSON);

// JSON.parse => Convert JSON to object
let parsedData = JSON.parse(bookJSON);
console.log(parsedData.author);
*/

// ====== Make seperate JSON file ====== >
/*
const fs = require('fs');

const book = {
    title: 'my book',
    author: 'me'
}

// create sperate json file
let bookJSON = JSON.stringify(book);
fs.writeFileSync('json_playground.json', bookJSON);
*/

// ====== Import seperate JSON file ====== >

const fs = require('fs');

const dataBuffer = fs.readFileSync('json_playground.json'); // read JSON file
const dataJSON = dataBuffer.toString(); // convert to string
const data = JSON.parse(dataJSON); // parse to object
console.log(data.title); // log property from object
