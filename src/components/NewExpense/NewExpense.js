import { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

export default function NewExpense({ onAddExpense }) {
  let [isEditing, setIsEditing] = useState(false);

  function saveExpenseDataHandler (enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    onAddExpense(expenseData);
  };

  function startEditingHandler () {
    setIsEditing(true);
  }
  
  function stpoEditingHandler() {
    setIsEditing(false);
  }

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}> Add New Expense</button>}
      {isEditing && 
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stpoEditingHandler}
        />
      }
    </div>
  );
}