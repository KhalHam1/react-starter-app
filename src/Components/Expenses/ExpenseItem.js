import React from "react";
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    const clickHandler = () => { //It is a common and sensible convention to end all function names for events with the word 'Handler'
        console.log('Clicked!');//Check console in the web for the console log results!
    };

    return (
        //The goal with the button is simple. Change the title(originally displayed as props.title) when clicked.
        //Go to https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
        //All those events have a prop equivalent in React
        //All prop equivalents begin with 'on' Example: 'onClick'
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'> 
                <h3>{props.title}</h3>
                <div className='expense-item__price'>${props.amount}</div>   
            </div>   
            <button onClick={clickHandler}>Change Title</button>
        </Card>
        //All the event handler (or 'on' props like onClick need a function as a value)
        //I generally want to define these functions before we return the component.
        //Remember, don't execute the function in onClick like clickHandler()!, only point to it (without brackets) like clickHandler!

        //IMPORTANT: Event listeners like onClick (and the others) are available on all the jsx elements (like div, h3, button, etc)
        //Some are specific to certain elements.

    )
}

export default ExpenseItem;