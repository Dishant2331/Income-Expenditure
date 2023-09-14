document.addEventListener('DOMContentLoaded', function() {
    const addTransactionForm = document.getElementById('add-transaction-form');
    const incomeList = document.getElementById('income-list');
    const expenditureList = document.getElementById('expenditure-list');
    const incomeTotal = document.getElementById('income-total');
    const expenditureTotal = document.getElementById('expenditure-total');

    let income = 0;
    let expenditure = 0;

    addTransactionForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const currency = document.getElementById('currency').value;
        const type = document.getElementById('type').value;

        if (!description || isNaN(amount)) {
            alert('Please fill out all fields with valid values.');
            return;
        }

        const transaction = document.createElement('div');
        transaction.classList.add('transaction');

        // Include the currency symbol when displaying the amount
        const amountWithCurrency = `${currency} ${amount.toFixed(2)}`;
        transaction.innerHTML = `
            <p>${description}</p>
            <p>${amountWithCurrency}</p>
        `;

        if (type === 'income') {
            income += amount;
            incomeList.appendChild(transaction);
        } else {
            expenditure += amount;
            expenditureList.appendChild(transaction);
        }

        incomeTotal.textContent = `Total Income: $${income.toFixed(2)}`;
        expenditureTotal.textContent = `Total Expenditure: $${expenditure.toFixed(2)}`;

        addTransactionForm.reset();
    });
});