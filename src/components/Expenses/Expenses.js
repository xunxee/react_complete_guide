import { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

export default function Expenses({ 
  data,
}) {
  const [filterYear, setFilterYear] = useState('2020');

  function filterChangeHandler(yearData) {
    setFilterYear(yearData);
  }

  const filteredExpenses = data.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart
          expenses={filteredExpenses}
        />
        <ExpensesList
          items={filteredExpenses}
        />
      </Card>
    </div>
  );
}