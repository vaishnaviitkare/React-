import React from "react";
import "./ExpenseForm.css";
const ExpenseForm=()=>{
return(
    <form>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label htmlFor="title">Title</label>
        <input type="text" id="title"/>
      </div>
      <div className="new-expense__control">
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" />
      </div>
      <div className="new-expense__control">
        <label htmlFor="date">Date</label>
        <input type="date" id="date" min="2023-01-01" max="2024-12-31" />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
    </div>
  </form>
);
}
export default ExpenseForm;