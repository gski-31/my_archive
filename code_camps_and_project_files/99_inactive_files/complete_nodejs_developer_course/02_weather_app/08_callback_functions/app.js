// a callback function is an argument for another function

setTimeout(() => {
    console.log('5 seconds have passed');
}, 5000);

const names = ['Jason', 'Regan', 'Copper', 'Emma', 'Knobi', 'Squirt', 'Daisy'];
const shortNames = names.filter((name) => {
    return name.length <= 4
})

console.log(shortNames);

/* CHALLENGE: Mess around with the callback pattern
1. Define an add function that accepts the correct arguments
2. Use setTimeout to simulate a 2 second delay
3. After 2 seconds are up, call the callback function with the sum
4. Test your work!
*/

const add = (x, y, callback) => {
    setTimeout(() => {
        callback(x + y);
    }, 2000);
};

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})


const again = (x, y, z) => {
    setTimeout(() => {
        z(y + x)
    }, 2000);
}

again(5,6, (anything)=>{
    console.log(anything)
})