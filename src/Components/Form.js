import React, { useState } from "react";

const Form = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    category: "",
  });

  const nameChangeHandler = (e) => {
    const nameText = e.target.value;
    setFormData((prevExpense) => {
      console.log("prevExpense =>", prevExpense);

      return {
        name: nameText,
        amount: prevExpense.amount,
      };
    });
  };
  const amountChangeHandler = (e) => {
    const amountText = e.target.value;
    setFormData((prevExpense) => {
      console.log("prevExpense =>", prevExpense);
      return {
        name: prevExpense.name,
        amount: amountText,
      };
    });
  };
  const categoryChangeHandler = (e) => {
    const categoryText = e.target.value;
    setFormData((prevExpense) => {
      console.log("prevExpense =>", prevExpense);
      return {
        name: prevExpense.name,
        amount: prevExpense.amount,
        category: categoryText,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAdd(formData);
  };

  //   const [nameInput, setNameInput] = useState("");
  //   const [amountInput, setAmountInput] = useState("");

  //   const nameChangeHandler = (e) => {
  //     const nameText = e.target.value;
  //     setNameInput(nameText);
  //   };
  //   const amountChangeHandler = (e) => {
  //     const amountText = e.target.value;
  //     setAmountInput(amountText);
  //   };

  //   const submitHandler = (e) => {
  //     e.preventDefault();

  //     const expense = {
  //       name: nameInput,
  //       amount: amountInput,
  //     };

  //     props.onAdd(expense);
  //   };
  return (
    <div className="wrapper">
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input
            onChange={nameChangeHandler}
            type="text"
            placeholder="Enter Expense Name..."
          />
        </div>
        <div className="form-group">
          <input
            onChange={amountChangeHandler}
            min="1"
            type="number"
            placeholder="Enter Expense Amount..."
          />
        </div>
        <div className="form-group">
          <select name="category">
            <option disabled selected>
              Category
            </option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="entertainment">Entertainment</option>
            <option value="shopping">Shopping</option>
          </select>
        </div>

        <button className="btn">Add Expense</button>
      </form>
    </div>
  );
};

export default Form;
