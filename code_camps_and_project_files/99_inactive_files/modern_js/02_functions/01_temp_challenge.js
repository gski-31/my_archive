/* Challenge: use function to convert temps */

const tempConvert = temp =>
        `${temp}_F is ${Math.round((temp - 32) * (5 / 9))}_C and ${Math.round((temp + 459.67) * (5 / 9))}_K`;

console.log(tempConvert(32));
console.log(tempConvert(88));
console.log(tempConvert(100));
