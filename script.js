let expenses = [];


const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expenses');
const totalExpenses = document.getElementById('total-expenses');


expenseForm.addEventListener('submit', function(event) {
  event.preventDefault();


  const expenseNameInput = document.getElementById('expense-name');
  const expenseAmountInput = document.getElementById('expense-amount');
  const expenseName = expenseNameInput.value;
  const expenseAmount = parseFloat(expenseAmountInput.value);


  if (expenseName.trim() === '' || isNaN(expenseAmount)) {
    alert('Please enter valid values for both fields.');
    return;
  }


  const expense = {
    name: expenseName,
    amount: expenseAmount
  };


  expenses.push(expense);


  expenseNameInput.value = '';
  expenseAmountInput.value = '';


  renderExpenses();
});


function renderExpenses() {

  expenseList.innerHTML = '';


  let total = 0;


  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];


    const listItem = document.createElement('li');
    listItem.textContent = `${expense.name}: $${expense.amount.toFixed(2)}`;


    expenseList.appendChild(listItem);


    total += expense.amount;
  }


  totalExpenses.textContent = `Total Expenses: $${total.toFixed(2)}`;
}
