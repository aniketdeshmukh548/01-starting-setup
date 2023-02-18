import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "./Card";
function ExpenseItem(props){
    return (
      <div className='expense-item'>
			<ExpenseDate date ={props.date} />
      <ExpenseDetails title={props.title} amount={props.amount} location={props.location}></ExpenseDetails>
		</div>
      // <Card className="expense-item">
      //   <ExpenseDate date={props.date} />
      //  <div className="expense-item__description">
      //  <ExpenseDetails title={props.title} amount={props.amount} location={props.location}></ExpenseDetails>
      //      {/* <h2 className="expense-item h2">{props.title}</h2>
      //     <div className="expense-item__price">Rs.{props.amount}/-</div>
      //     <div className="expense-item__location">{props.location}</div>  */}
      //   </div> 
      // </Card>
    );
}

export default ExpenseItem;