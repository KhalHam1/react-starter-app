import React from "react";
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import './Expenses.css'

function Expenses(props) {
    return ( //Each tag below is almost like a function call. It makes React aware of its declaration.
             //These functions are all called only once, when the app is initialized.
             //In order notify React that something changed and cause it to re-evaluate a component, we must utilize the concept called STATE!
        <Card className='expenses'>
        <ExpenseItem title={props.data[0].title} amount={props.data[0].amount} date={props.data[0].date}/>
        <ExpenseItem title={props.data[1].title} amount={props.data[1].amount} date={props.data[1].date}/>
        <ExpenseItem title={props.data[2].title} amount={props.data[2].amount} date={props.data[2].date}/>
        <ExpenseItem title={props.data[3].title} amount={props.data[3].amount} date={props.data[3].date}/>
        </Card>
    );
}

export default Expenses;