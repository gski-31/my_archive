/* CHALLENGE
2 guests, 2 diets, give options
*/

const g1 = true;
const g2 = false;

if (g1 === true && g2 === true) {
        console.log('v menu');
} else if (g1 === true || g2 === true) {
        console.log('m menu');
} else {
        console.log('n menu');
}
