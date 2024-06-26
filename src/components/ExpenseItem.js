import "./ExpenseItem.css";
function ExpenseItem(props) {
    //we wrap of many div or items in one div because js can return one item at a time
    return (
      <div className="expense-item">
        <div>{props.date.toISOString()}</div>
        <div className="expense-item__location">{props.location}</div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
      </div>
    );
  }
//we can export this component so that we can import it wherever we need
export default ExpenseItem; 