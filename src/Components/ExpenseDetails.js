import './ExpenseDetails.css'
function ExpenseDetails(props){
    const title=props.title.toLocaleString('en-US',{title:'long'});
    const amount=props.amount.toLocaleString('en-US',{amount:'5-digit'});
    const location=props.location.toLocaleString('en-US',{location:'long'});
    return(
        <div className='expense-details'>
            <div className='expense-details__title'>{title}</div>
            <div className='expense-details__amount'>{amount}</div>
            <div className='expense-details__location'>{location}</div>
        </div>
    );
}

export default ExpenseDetails;