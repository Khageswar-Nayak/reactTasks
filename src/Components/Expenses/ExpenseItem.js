import React, { useState } from "react";
import Card from "../UI/Card";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  // return React.createElement('Card' , {className : 'expense-item'},
  //  React.createElement(ExpenseDate , {date : props.date} ),
  //  React.createElement(ExpenseDetails , {title : props.title , amount : props.amount, place : props.place} ),

  //  )
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setAmount("100$");
    //console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} amount={amount} place={props.place} />
      {/* <li>
        {props.title} {props.amount} {props.place}{" "}
      </li> */}

      {/* <p>spend in {props.location}</p> */}
      <button onClick={clickHandler}>change Title</button>
    </Card>
  );
};

export default ExpenseItem;
