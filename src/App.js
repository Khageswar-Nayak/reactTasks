import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./Components/Expenses/ExpenseItem";
import ExpenseForm from "./Components/Expenses/ExpenseForm";

const App = () => {
  //const LocationOfExpenditure = "Mumbai";
  const obj = [
    {
      title: "food",
      amount: 1000,
      place: "Bhadrak",
      date: new Date(2023, 3, 12),
    },
    {
      title: "movie",
      amount: 700,
      place: "Baleswar",
      date: new Date(2023, 3, 13),
    },
    {
      title: "petrol",
      amount: 2000,
      place: "Jajpur",
      date: new Date(2023, 3, 14),
    },
    {
      title: "other",
      amount: 1500,
      place: "Bhubaneswar",
      date: new Date(2023, 3, 15),
    },
  ];

  const array = Object.keys(obj);

  const saveExpenseDataHandler = (enteredExpenseData)=>{
    const expenseData ={
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData);

  }

  return (
    <div className="App">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>

      
        {array.map((key) => (
          <ExpenseItem
            //location={LocationOfExpenditure}
            title={obj[key].title}
            amount={obj[key].amount}
            place={obj[key].place}
            date={obj[key].date}
          ></ExpenseItem>
        ))}
      
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
