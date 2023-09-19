/* Challenge: use function to create tips */

const tipCalc = (total, percent = 0.2) => {
        const tip = parseFloat((total * percent).toFixed(2));
        return `on a $${total} bill, leave $${tip} for a total of $${total + tip}`;
};

console.log(tipCalc(50, 0.15));
console.log(tipCalc(100));
console.log(tipCalc(88.62, 0.06));
