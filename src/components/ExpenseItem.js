import "./ExpenseItem.css";
function ExpenseItem() {
    //we wrap of many div or items in one div because js can return one item at a time
    const expenseDate=new Date(2024,6,25).toISOString();
    const expenseTitle="Insurance";
    const expenseAmount=50;
    const expenseLocation="Bangalore";
    return (
      <div className="expense-item">
        <div>{expenseDate}</div>
        <div className="expense-item__location">{expenseLocation}</div>
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">${expenseAmount}</div>
        </div>
      </div>
    );
  }
//we can export this component so that we can import it wherever we need
export default ExpenseItem; 