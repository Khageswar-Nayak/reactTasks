import './ExpenseForm.css';

const ExpenseForm = () =>{
const titleChangeHandler =(event)=>{
console.log(event.target.value);
}

    return(
        <div className="container">
        <h1 className="form-title">Add Expense</h1>
        <form >
          <div className="main-expense-info">
            <div className="expense-input-box">
              <label>Expense title</label>
              <input type="text" placeholder="Enter title" onChange={titleChangeHandler}/>
            </div>
            <div className="expense-input-box">
              <label>Expense Amount</label>
              <input type="number" placeholder="Enter amount"/>
            </div>
            
            <div className="expense-input-box">
              <label>Date</label>
              <input type="date"/>
            </div>         
          
          </div>
          <div className="form-submit-btn">
            <input type="submit" value="Add"/>
          </div>
        </form>
      </div>
    );
}

export default ExpenseForm;