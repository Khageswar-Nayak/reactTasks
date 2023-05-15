import React from 'react';
import Card from '../UI/Card';

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";


const ExpenseItem = (props) => {
  // return React.createElement('Card' , {className : 'expense-item'},
  //  React.createElement(ExpenseDate , {date : props.date} ),
  //  React.createElement(ExpenseDetails , {title : props.title , amount : props.amount, place : props.place} ),
   
  //  )

  const handleDelete = () => {
    const cardElement = document.querySelector('.expense-item');
    if (cardElement) {
      cardElement.remove();
    }
  };

   return (
    
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} amount={props.amount} place={props.place}/>
      {/* <li>
        {props.title} {props.amount} {props.place}{" "}
      </li> */}

      {/* <p>spend in {props.location}</p> */}
      <button onClick={handleDelete}>Delete Expense</button>
    </Card>
 );

  
}

export default ExpenseItem;
