import './ExpenseItem.css';

const {log} = console;

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseItle = "Car Insurance";
  const expenseAmount = 294.67;
  log(expenseDate);

  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseItle}</h2>
      </div>
      <div className='expense-item__price'>{expenseAmount}</div>
    </div>
  )
}

export default ExpenseItem;