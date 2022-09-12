export const getTransactionsIsLoading = state => state.transactions.isLoading;
export const getTransactionsBalance = state => state.transactions.balance;
export const getTransactionsDate = state => state.transactions.date;
export const getTransactionsExpenses = state => state.transactions.expenses;
export const getTransactionsIncomes = state => state.transactions.incomes;
export const getTransactionsMonthsExpenses = state =>
  state.transactions.monthsExpenses;
export const getTransactionsMonthsIncomes = state =>
  state.transactions.monthsIncomes;
export const getTransactionsExpenseCategories = state =>
  state.transactions.expenseCategories;
export const getTransactionsIncomeCategories = state =>
  state.transactions.incomeCategories;
export const getTransactionsError = state => state.transactions.error;
