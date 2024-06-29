import React,{useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/Newexpense';
const App=()=> {
  const expenses = [
    { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
    { id: 2, title: "Book", date: new Date(2023, 8, 25), price: 10 },
    { id: 3, title: "Pen", date: new Date(2023, 2, 10), price: 1 },
    { id: 4, title: "Laptop", date: new Date(2023, 9, 17), price: 200 },
  ];
  const saveExpenseDataHandler=(enteredData)=>{
    console.log(enteredData);
  };
  return (
    <div>
      <NewExpense onSaveData={saveExpenseDataHandler}></NewExpense>
      <Expenses expense={expenses}></Expenses>
    </div>
  );
}

export default App;
