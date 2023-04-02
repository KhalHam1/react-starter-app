import './ExpenseItem.css'
//So how is a component written?
//Look at App.js. A component in REACT is just a
//JAVASCRIPT FUNCTION (which return jsx code)
//ie

function ExpenseItem() {
    // return <h2>Expense Item!</h2>
    return (
        // Remember to always have a single root element. IE: This div below in which all other elements are contained.
        <div className='expense-item'>
            <div>2nd April 2023</div>
            <div className='expense-item__description'> 
                <h3>Car Insurance</h3>
                <div className='expense-item__price'>$421.00</div>   
            </div>   
        </div>
    )
}

export default ExpenseItem;