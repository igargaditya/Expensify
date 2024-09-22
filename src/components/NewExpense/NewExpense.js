import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = props => {
  const handleSaveExpenseData = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toFixed(2),
    };
    props.onAddExpenses(expenseData);
    setFormShown(false);
  };
  const [isShownForm, setFormShown] = useState(false);
  function handleAddExpenseClick() {
    setFormShown(true);
  }
  function handleCancelButton() {
    setFormShown(false);
  }

  if (isShownForm) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={handleSaveExpenseData}
          onCancel={handleCancelButton}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button type="submit" onClick={handleAddExpenseClick}>
          Add New Expenses
        </button>
      </div>
    );
  }
};
export default NewExpense;
