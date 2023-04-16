import React from "react";
import './Card.css'

function Card(props) {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>//props.children is a built in prop in every React component.
    //Children is a reserved props value. I do not set it.
    //The value of props.children is always be the content between the opening and closing tag of my custom component.
}

export default Card;
//This component is simply used as a CONTAINER component. 
//It will reduce the duplication of css by executing all standard styles at once to any other component.
//We placed all the common css from expenses and expenseItem in a separate card component, so that we don't have to duplicate the css
//in both components.