import ExpenseItem from "./Components/ExpenseItem";

function App() {
  //This is jsx. ie: html code in javascript coutesy react.
  //This App.js will be used as the ROOT component. All other components will be nested into this component.
  //This is known as building a component tree, with App.js as the ultimate root.
  return (
    <div>
      <h2>Let's get started!</h2>
      {/* Elements starting with an Uppercase character
      are understood to be developer-made elements */}
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
