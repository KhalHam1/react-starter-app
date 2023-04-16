import React from "react";
import Expenses from "./Components/Expenses";

function App() {
  const expenses = [
    {title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14),},
    {title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {title: 'Car Insurance', date: new Date(2021, 2, 28), amount: 421.00},
    {title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12),
    }
  ];

  //This is the 'underthehood' code which gets created every time I run JSX like the code that is used below.
  //This is the way it was written with REACT in the past, and many projects still use this method.
  //If this method is used, the 'import React from "react" statement must be used in ALL components.'
  //In more modern React projects, this can be omitted for the simpler JSX code.
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's Get Started!"),
  //   React.createElement(Expenses, {data: expenses})
  // );
  //This should clearly show as well why a root element is always needed. 
  //It's so that the JSX code can accurately be ported over to the React.createElement method.
  
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses data={expenses}/>
    </div>
  );
}

export default App;
