/* CHALLENGE: convert F ot C and K */

const F = 32;
const C = Math.round((F - 32) * (5 / 9));
const K = Math.round((F + 459.67) * (5 / 9));

console.log(`${F}_F is ${C}_C and ${K}_K`);
