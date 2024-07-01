import React, { useState,useEffect } from 'react';
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
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
    
   
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
     {/*For creating chart we need the filteredExpenses array so pass it */}
      <ExpensesChart chartData={filteredExpenses}/>
      <ExpenseList item={filteredExpenses}/>
    </Card>
);
}
export default Expenses;