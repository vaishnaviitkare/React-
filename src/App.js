import React,{useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/Newexpense';
const App=()=> {
  //adding the newEnteredData into expenses array
  const [expenses,setExpenses]=useState( [
    { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
    { id: 2, title: "Book", date: new Date(2024, 8, 25), price: 10 },
    { id: 3, title: "Pen", date: new Date(2025, 2, 10), price: 1 },
    { id: 4, title: "Laptop", date: new Date(2024, 9, 17), price: 200 },
  ]);
  const saveExpenseDataHandler=(enteredData)=>{
    console.log(enteredData);
    //adding previously updated expenses plus the new entered value using spred array
    setExpenses((prevExpenses)=>{
      return [enteredData,...prevExpenses];
    })
  };
  return (
    <div>
      <NewExpense onSaveData={saveExpenseDataHandler}></NewExpense>
      <Expenses expense={expenses}></Expenses>
    </div>
  );
}

export default App;
