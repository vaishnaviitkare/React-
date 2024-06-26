import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props){
   return (
    <div className="expenses">
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
    </div>
);
}
export default Expenses;