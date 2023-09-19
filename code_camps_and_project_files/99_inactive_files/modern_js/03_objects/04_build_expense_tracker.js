/* CHALLENGE: Build expense tracker
• add income
• add expense
• get summary
• reset account
*/

const myAccount = {
        name: 'jason',
        income: 0,
        expense: 0,
};

const addExpense = (account, amount) => {
        account.expense += amount;
};

const addIncome = (account, amount) => {
        account.income += amount;
};

const getSummary = account => `there is a balance of ${account.income} with ${account.expense}in expenses`;

const resetAccount = account => {
        account.expense = 0;
        account.income = 0;
};

addExpense(myAccount, 3200);
addExpense(myAccount, 50);
addExpense(myAccount, 200);

addIncome(myAccount, 150000200);

console.log(getSummary(myAccount));

resetAccount(myAccount);

console.log(getSummary(myAccount));
