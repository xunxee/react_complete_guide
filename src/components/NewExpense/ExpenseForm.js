import { useState } from 'react';

import './ExpenseForm.css';

export default function ExpenseForm({ 
  onSaveExpenseData,
  onCancel,
}) {
  const [inputs, setInputs] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const { title, amount, date } = inputs;


  function handleInputValue(e) {
    setInputs({
      ...inputs, title: e.target.value,
    });
  }

  function handleAmountValue(e) {
    setInputs({
      ...inputs, amount: e.target.value,
    });
  }

  function handleDateValue(e) {
    setInputs({
      ...inputs, date: e.target.value,
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    onSaveExpenseData(expenseData);

    setInputs({
      title: '',
      amount: '', 
      date: '',
    });

    onCancel();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input 
            type="text"
            value={title}
            onChange={handleInputValue} 
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input 
            type="number"
            value={amount}
            min="0.01"
            step="0.01" 
            onChange={handleAmountValue}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="2019-01-01"
            max="2022-12-31" 
            onChange={handleDateValue}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}