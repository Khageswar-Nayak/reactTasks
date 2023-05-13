import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./Components/ExpenseItem";

function App() {
  //const LocationOfExpenditure = "Mumbai";
  const obj = [
    { title: "food", amount: 1000, place: "BDK" },
    { title: "movie", amount: 700, place: "BLS" },
    { title: "petrol", amount: 2000, place: "JJPR" },
    { title: "other", amount: 1500, place: "BBSR" },
  ];

  const array = Object.keys(obj);

  return (
    <div>
      <h2>Let's get Started</h2>
      <h2>Expense Items</h2>
      {array.map((key) => (
        <ExpenseItem          
          //location={LocationOfExpenditure}
          title={obj[key].title}
          amount={obj[key].amount}
          place={obj[key].place}
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
}

export default App;
