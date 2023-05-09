import React from "react";
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

    let title = props.title; //This can be the initial value of 'title' before the button is clicked.
                             //Can we change the value using the clickHandler function?

    const clickHandler = () => { //It is a common and sensible convention to end all function names for events with the word 'Handler'
        console.log('Clicked!');//Check console in the web for the console log results!
        title = 'Updated!'; //This will not work. The title does not update. So why is that? See Expenses.js
    };

    return (
        //The goal with the button is simple. Change the title(originally displayed as props.title) when clicked.
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'> 
                <h3>{title}</h3>
                <div className='expense-item__price'>${props.amount}</div>   
            </div>   
            <button onClick={clickHandler}>Change Title</button>
        </Card>
        //Remember, don't execute the function in onClick like clickHandler()!, only point to it (without brackets) like clickHandler!

        //IMPORTANT: Event listeners like onClick (and the others) are available on all the jsx elements (like div, h3, button, etc)
        //Some are specific to certain elements.

    )
}

export default ExpenseItem;