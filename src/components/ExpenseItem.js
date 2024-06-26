import "./ExpenseItem.css";
const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
function ExpenseItem(props) {
    //we wrap of many div or items in one div because js can return one item at a time
    const month=months[props.date.getMonth()];
    const year=props.date.getFullYear();
    const date=props.date.getDate()<10?'0'+props.date.getDate():props.date.getDate();
    return(
        <div className="expense-item">
        <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{date}</div>
        </div>
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