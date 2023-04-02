import './ExpenseItem.css'
//So how is a component written?
//Look at App.js. A component in REACT is just a
//JAVASCRIPT FUNCTION (which return jsx code)
//ie

function ExpenseItem() {
    //
    const expenseDate = new Date(2021, 2, 28);//We use JavaScript to get the values for the reusable components.
    const expenseTitle = 'Car Insurance'; //We use {} inside the JSX elements to display dynamic javascript data.
    const expensePrice = 421.00; //Inside the {}, we can run basic JavaScript expressions. Ex: 1+1; 
    return (
        // Remember to always have a single root element. IE: This div below in which all other elements are contained.
        <div className='expense-item'>
            <div>{String(expenseDate)}</div>
            <div className='expense-item__description'> 
                <h3>{expenseTitle}</h3>
                <div className='expense-item__price'>${expensePrice}</div>   
            </div>   
        </div>
    )
}
//However, in order to make the component truly reusable, we can't hardcode data into the component.
//We have to use props. The data shouldn't be stored here in the component, but in App.js

export default ExpenseItem;