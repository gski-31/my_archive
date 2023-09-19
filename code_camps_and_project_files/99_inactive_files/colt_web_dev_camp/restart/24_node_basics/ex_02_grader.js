let average = (scores) => {
    return Math.round((scores.reduce((a, b) => a + b)) / scores.length);
}

console.log(average([88, 72, 56, 88, 92]));