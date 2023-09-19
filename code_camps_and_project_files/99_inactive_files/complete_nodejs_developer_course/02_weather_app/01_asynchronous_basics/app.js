console.log('starting');

// function, delay
setTimeout(() => {
    console.log('2 second delay')
}, 2000);

setTimeout(() => {  // callstack related // codesmith has better explanation
    console.log('0 second delay')
}, 0);

console.log('the end');