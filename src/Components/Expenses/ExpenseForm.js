import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const addExpense = (event) => {
    event.preventDefault();

    const expenseData = {
      title:enteredTitle,
      amount:enteredAmount,
      date: new Date(enteredDate)
    };
    console.log(expenseData);
    const parentElem =document.getElementById('submitItems');
    const childElem =document.createElement('li');
    childElem.textContent = `${expenseData.title} ${expenseData.amount} ${expenseData.date}`
    parentElem.appendChild(childElem);
  };

  

  return (
    <div className="container">
      <h1 className="form-title">Add Expense</h1>
      <form onSubmit={addExpense}>
        <div className="main-expense-info">
          <div className="expense-input-box">
            <label>Expense title</label>
            <input
              type="text"
              placeholder="Enter title"
              onChange={titleChangeHandler}
            />
          </div>
          <div className="expense-input-box">
            <label>Expense Amount</label>
            <input
              type="number"
              placeholder="Enter amount"
              onChange={amountChangeHandler}
            />
          </div>

          <div className="expense-input-box">
            <label>Date</label>
            <input type="date" onChange={dateChangeHandler} />
          </div>
        </div>
        <div className="form-submit-btn">
          <input type="submit" value="Add" onClick={addExpense} />
        </div>
      </form>
      {/* <div id="submitItems" className="submitItems"></div> */}
    </div>
    
  );
};

export default ExpenseForm;
