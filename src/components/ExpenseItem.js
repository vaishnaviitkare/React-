import "./ExpenseItem.css";
function ExpenseItem() {
    //we wrap of many div or items in one div because js can return one item at a time
    return (
      <div className="expense-item">
        <div>15 August 2023</div>
        <div className="expense-item__location">Delhi</div>
        <div className="expense-item__description">
          <h2>Book</h2>
          <div className="expense-item__price">$10</div>
        </div>
      </div>
    );
  }
//we can export this component so that we can import it wherever we need
export default ExpenseItem; 