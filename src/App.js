import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "Grocery",
    amount: 1500,
    date: new Date(2023, 9, 12),
  },
  {
    id: "2",
    title: "Medical Expenses",
    amount: 800,
    date: new Date(2022, 2, 12),
  },
  {
    id: "3",
    title: "Health Insurance",
    amount: 900,
    date: new Date(2021, 1, 1),
  },
  {
    id: "4",
    title: "Furniture",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpenses={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
}

export default App;
