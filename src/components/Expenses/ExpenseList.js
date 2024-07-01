import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList=(props)=>{
   if(props.item.length===0){
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
 
   }
   return (
    <ul className="expenses-list">
   {props.item.map((expen)=>{
    return(
      <div>
      <ExpenseItem
      key={expen.id}
      date={expen.date}
      title={expen.title}
      price={expen.price}
      >
      </ExpenseItem>
      <p className="expense-oneitem">
      {props.item.length===1 && "Only one expense here. Please add more"}
      </p>
      </div>
    );
    })
}
</ul>
);
}
export default ExpenseList;