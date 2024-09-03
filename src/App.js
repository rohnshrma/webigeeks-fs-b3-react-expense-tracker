import React, { useState } from "react";
import Form from "./Components/Form";
import Expense from "./Components/Expense";
import CategoryBar from "./Components/CategoryBar";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const categoryBarChangeHandler = (category) => {
    setSelectedCategory(category.toLowerCase());
  };

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

      <CategoryBar onSelect={categoryBarChangeHandler} />

      {selectedCategory === "all"
        ? expenses.map((expenseObj, index) => {
            return (
              <Expense
                name={expenseObj.name}
                amount={expenseObj.amount}
                key={index}
                id={index}
                onDelete={deleteExpenseHandler}
              />
            );
          })
        : expenses.map((expenseObj, index) => {
            if (expenseObj.category === selectedCategory) {
              return (
                <Expense
                  name={expenseObj.name}
                  amount={expenseObj.amount}
                  key={index}
                  id={index}
                  onDelete={deleteExpenseHandler}
                />
              );
            }
          })}
    </div>
  );
};

export default App;
