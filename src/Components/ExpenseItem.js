import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'> 
                <h3>{props.title}</h3>
                <div className='expense-item__price'>${props.amount}</div>   
            </div>   
        </div>
    )
}
//KEEP TRACK OF HOW THE DATE IS PASSED ON AS A PROP FROM App.js THEN TO ExpenseItem.js AND FINALLY TO ExpenseDate.js.
//Props can be used to send data through many components.
//The ExpenseDate component is now nested inside the ExpenseItem component.
//Thus, the component tree takes shape.


export default ExpenseItem;