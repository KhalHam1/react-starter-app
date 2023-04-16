import React from "react";
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    return (//In order for className='expense-item' to work, I must define it in the Card component. JSX elements like <Card> can't automatically 
            //use css classes like html elements. I must define it as shown in the Card.js file in the 'classes' array.
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'> 
                <h3>{props.title}</h3>
                <div className='expense-item__price'>${props.amount}</div>   
            </div>   
        </Card>
    )
}

export default ExpenseItem;