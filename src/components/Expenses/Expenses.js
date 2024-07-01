import React, { useState,useEffect } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import Card from "../UI/Card";
const Expenses=(props)=>{
  const [filteredYear,setFilteredYear]=useState("2023");
  //const [filteredData,setFilteredData]=useState(props.expense);
   const changeFilterHandler=(selectedYear)=>{
      setFilteredYear(selectedYear);
      /*also do this as this give same here in above useState we give props.expense as initial so initially all data we enter is present and 
      after selecting year chnage data is present
      const filteredExpenses=props.expense.filter((value)=>{
        //convert selectedYear to int because our date.getFullYear give int year and selectedYear present in string or convert getFullYear to string
        return value.date.getFullYear()===parseInt(selectedYear);
      })
     setFilteredData(filteredExpenses);*/
    };
    const filteredExpenses=props.expense.filter((value)=>{
      return value.date.getFullYear().toString()===filteredYear;
    })
    let expensesContent=<p>No expenses Found</p> 
    if(filteredExpenses.length>0){
    expensesContent= filteredExpenses.map((expen,index)=>{
        return(
          <div>
          <ExpenseItem
          key={expen.id}
          date={expen.date}
          title={expen.title}
          price={expen.price}
          >
          </ExpenseItem>
          {filteredExpenses.length===1 && "Only one expense here. Please add more"};
          </div>
        );
    })
    }
   
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
    {expensesContent}
    </Card>
);
}
export default Expenses;