import ExpenseItem from "./Components/ExpenseItem";

function App() {
  //We will use this array of expenseItem objects to get the expenseItem data now.
  const expenses = [
    {title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14),},
    {title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {title: 'Car Insurance', date: new Date(2021, 2, 28), amount: 421.00},
    {title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12),
    }
  ];
  return (
    //We want the ExpenseItem tags below to use the data from the array of expenseItem objects above.
    //We can do this by adding attributes to the tags.
    <div>
      <h2>Let's get started!</h2>
      {/* Elements starting with an Uppercase character
      are understood to be developer-made elements */}
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>
    //Now, after using the attributes to get the desired data into the components, we must go into the component and make use of the received data
    //in order to display it.
  );
}

export default App;
