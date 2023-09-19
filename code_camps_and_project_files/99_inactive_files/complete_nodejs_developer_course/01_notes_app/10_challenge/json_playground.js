/*
CHALLENGE: Work with JSON and the file system
1. Load and parse the JSON data
2. Change the name and age property using your info
3. Stringify the changed object and overwrite the original data
4. Test your work by viewing data in the JSON file
*/

const fs = require('fs');
// load data
const loadedData = fs.readFileSync('json_playground.json').toString();
// parse data
const myData = JSON.parse(loadedData);
// change data
myData.name = 'Jason';
myData.age = '888';
// convert to json
const stringData = JSON.stringify(myData);
// write to file
fs.writeFileSync('json_playground.json', stringData);
