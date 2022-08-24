import './ExpenseDate.css';

export default function ExpenseDate({ date }) {
  const MONTH = date.date.toLocaleString('en-US', { month: 'long' });
  const DAY = date.date.toLocaleString('en-US', { day: '2-digit' });
  const YEAR = date.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{MONTH}</div>
      <div className='expense-date__year'>{YEAR}</div>
      <div className='expense-date__day'>{DAY}</div>
    </div>
  );
}