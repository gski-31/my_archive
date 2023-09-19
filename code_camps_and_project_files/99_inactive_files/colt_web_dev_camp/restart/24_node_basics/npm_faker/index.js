const faker = require('faker');

for(let i = 0 ; i < 10 ; i++){
console.log(`Buy ${faker.commerce.productName()} for just \$${faker.finance.amount()}`);
}


