import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
function Expenses(props) {
  const [year, setYear] = useState('2020');
  function handleFilterChange(filterYear) {
    setYear(filterYear);
  }
  const filteredItems = props.items.filter(
    item => item.date.getFullYear().toString() === year
  );
  console.log(filteredItems);
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={handleFilterChange}
          selectedYear={year}
        />
        <ExpensesChart expenses={filteredItems} />
        <ExpenseList items={filteredItems} />
      </Card>
    </li>
  );
}
export default Expenses;
