import React, { useState } from "react"; // Must import this function useState from the React library in order to work with State
                                         // It allows us to define values as STATE, where changes to these values should result in the component function
                                         // being called again.
//useState is a React Hook! There are many. They can be recognized because they all start with 'use' and they are all called in the component function!
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    //useState reutns an array!
    //The first values is the value itself
    //The second value in the array is an updating function.

    //We can use a JavaScript concept called ARRAY DESTRUCTURING to store both elements in separate variables or constants.
    const [title, setTitle] = useState(props.title); //Declaring useState and using its returned value and method WILL RESULT in the component being
                                                     //executed again!

    const clickHandler = () => { 
        console.log('Clicked!');
        setTitle('Updated!'); //To update the state, use the updating method returned by the useState hook!
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