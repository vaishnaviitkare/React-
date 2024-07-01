import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense=(props)=>{
    const [flagValue, setFlagValue]=useState(false);
    const saveExpenseDataHandler=(enteredExpenseData)=>{
       const expenseData={...enteredExpenseData,id:Math.random().toString()};
       console.log(expenseData);
       props.onSaveData(expenseData);
       setFlagValue(false);
    }

return(
<div className="new-expense">
{!flagValue && (
        <button
          type="button"
          onClick={() => {
            setFlagValue(true);
          }}
        >
          Add Expense
        </button>
      )}
      {flagValue && (

<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
  onCancel={() => {
   setFlagValue(false);
  }}/>
)}
</div>
);
}
export default NewExpense;