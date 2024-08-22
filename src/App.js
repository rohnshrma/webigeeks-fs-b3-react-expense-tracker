import React, { useState } from "react";
import Form from "./Components/Form";
import Expense from "./Components/Expense";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expenseObj) => {
    console.log(expenseObj);
    setExpenses((prevExpenses) => {
      return [expenseObj, ...prevExpenses];
    });
  };
  const deleteExpenseHandler = (id) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expenseObj, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <Form onAdd={addExpenseHandler} />
      {expenses.map((expenseObj, index) => {
        return (
          <Expense
            name={expenseObj.name}
            amount={expenseObj.amount}
            key={index}
            id={index}
            onDelete={deleteExpenseHandler}
          />
        );
      })}
    </div>
  );
};

export default App;
