import React from 'react';
import Expenses from "./components/Expenses/Expenses";
const App=()=> {
  const expenses=[
    { id: "1", date: new Date(2023, 7, 2), location:"Bangalore", title: "Insurance", price: 100 },
    { id: "2", date: new Date(2023, 3, 25), location:"Delhi", title: "Book", price: 10 },
    { id: "3", date: new Date(2023, 10, 11), location:"Hyderabad", title: "Pen", price: 1 },
    { id: "4", date: new Date(2023, 1, 14), location:"Mumbai", title: "Laptop", price: 200 },
 
  ]
  return (
    <div>
      <Expenses expense={expenses}></Expenses>
    </div>
  );
}

export default App;
