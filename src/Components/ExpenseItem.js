import './ExpenseItem.css'

//We can use a parameter in the component function (props) to collect all the parameters received in the JSX in App.js
//props is an object which holds all the values we get from the tag attributes in App.js
//The data in props will be in the form of key,value pairs. Keys are the attribute name (ie title, amount and date). Values will of course be the values set.
function ExpenseItem(props) {
    //HARDCODED javascript no longer needed here.
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'Car Insurance'; 
    // const expensePrice = 421.00;
    return (
        // Remember to always have a single root element. IE: This div below in which all other elements are contained.
        <div className='expense-item'>
            <div>{String(props.date)}</div>
            <div className='expense-item__description'> 
                <h3>{props.title}</h3>
                <div className='expense-item__price'>${props.amount}</div>   
            </div>   
        </div>
    )
}
//Props are essential in having reusable components in react. It allows us to take in external values outside of the component and use it in the
//execution of the component.


export default ExpenseItem;