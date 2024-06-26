import React from 'react';
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
const Expenses=(props)=>{
   return (
    <Card className="expenses">
    {props.expense.map((expen,index)=>{
        return(
          <ExpenseItem
          key={expen.id}
          date={expen.date}
          location={expen.location}
          title={expen.title}
          price={expen.price}
          >
          </ExpenseItem>
        )
    })}
    </Card>
);
}
export default Expenses;