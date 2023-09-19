//* *******PT 1*********
// each expense should have two properties
// {description: 'string'
// amount: num}
// create methods to put things in expenses & analyze data
// addExpense method takes (description, amount)
// getAccountSummary totals all expenses and prints template string `${account.name} has ${account.totalExpenses} in expenses.`

//* ********PT 2*********
// 1. add income array to account
// 2. add income method
// description: 'string'
// amount: num
// 3. tweak getAccountSummary
// print `${this.name} has $${totalExpenses} in expenses and $${totalIncome} in income. The account balance is $${balance}.`

const account = {
        name: 'Jason',
        expenses: [],
        income: [],
        addExpense(description, amount) {
                // can't use '=>' with 'this'
                this.expenses.push({
                        description,
                        amount,
                });
        },
        addIncome(description, amount) {
                this.income.push({
                        description,
                        amount,
                });
        },
        getAccountSummary() {
                let totalExpenses = 0;
                let totalIncome = 0;

                this.income.forEach(function(income) {
                        totalIncome += income.amount;
                });

                this.expenses.forEach(function(expense) {
                        totalExpenses += expense.amount;
                });

                const totalBalance = totalIncome - totalExpenses;

                return `${this.name} has a balance of $${totalBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`;
        },
};

account.addExpense('Home', 3200);
account.addExpense('Food', 1000);
account.addIncome('Pay', 7085);
console.log(account.getAccountSummary());
