import React from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem=(props)=> {
    //we wrap of many div or items in one div because js can return one item at a time
    return(
        <Card className="expense-item">
          <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__location">{props.location}</div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
      </Card>
      );
  }
//we can export this component so that we can import it wherever we need
export default ExpenseItem; 
