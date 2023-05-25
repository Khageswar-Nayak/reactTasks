import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import ExpenseItem from "./Components/Expenses/ExpenseItem";
import ExpenseForm from "./Components/Form/ExpenseForm";
import ExpenseFilter from "./Components/Expenses/ExpenseFilter";

const obj = [
  {
    title: "food",
    amount: 1000,
    place: "Bhadrak",
    date: new Date(2023, 3, 12),
    id: 1,
  },
  {
    title: "movie",
    amount: 700,
    place: "Baleswar",
    date: new Date(2022, 3, 13),
    id: 2,
  },
  {
    title: "petrol",
    amount: 2000,
    place: "Jajpur",
    date: new Date(2021, 3, 14),
    id: 3,
  },
  {
    title: "other",
    amount: 1500,
    place: "Bhubaneswar",
    date: new Date(2020, 3, 15),
    id: 4,
  },
];

const App = () => {
  //const LocationOfExpenditure = "Mumbai";

  //const array = Object.keys(obj);
  const [expenses, setExpenses] = useState(obj);
  const [filteredYear, setFilteredYear] = useState("all");

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);

    setExpenses((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    if (filteredYear === "all") {
      return true;
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });

  
  return (
    <div className="App">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      
      {filteredExpenses.map((expenses) => (
      <ExpenseItem
        //location={LocationOfExpenditure}
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        place={expenses.place}
        date={expenses.date}
        
      ></ExpenseItem>
      
    ))}
    {filteredExpenses.length== 1 && <p className="below-expense">Only single Expense here. Please add more...</p>}
    {filteredExpenses.length== 0 && <p className="below-expense">Please add Expenses...</p>}

      {/* <ExpenseItem
        location={LocationOfExpenditure}
        title={obj[0].title}
        amount={obj[0].amount}
        place={obj[0].place}
      ></ExpenseItem>
      <ExpenseItem
        location={LocationOfExpenditure}
        title={obj[1].title}
        amount={obj[1].amount}
        place={obj[1].place}
      ></ExpenseItem>
      <ExpenseItem
        location={LocationOfExpenditure}
        title={obj[2].title}
        amount={obj[2].amount}
        place={obj[2].place}
      ></ExpenseItem>
      <ExpenseItem
        location={LocationOfExpenditure}
        title={obj[3].title}
        amount={obj[3].amount}
        place={obj[3].place}
      ></ExpenseItem> */}
    </div>
  );
};

export default App;
