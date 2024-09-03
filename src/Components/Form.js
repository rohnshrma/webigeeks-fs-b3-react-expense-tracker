import React, { useReducer, useState } from "react";

const formReducer = (state, action) => {
  if (action.type === "NAME_CHANGE") {
    return {
      name: action.payload,
      amount: state.amount,
      category: state.category,
    };
  }
  if (action.type === "AMOUNT_CHANGE") {
    return {
      name: state.name,
      amount: action.payload,
      category: state.category,
    };
  }
  if (action.type === "CATEGORY_CHANGE") {
    return {
      name: state.name,
      amount: state.amount,
      category: action.payload,
    };
  }
  return initialState;
};

const initialState = {
  name: "",
  amount: "",
  category: "",
};

const Form = (props) => {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const nameChangeHandler = (e) => {
    const nameText = e.target.value;

    dispatch({ type: "NAME_CHANGE", payload: nameText });
  };
  const amountChangeHandler = (e) => {
    const amountText = e.target.value;
    dispatch({ type: "AMOUNT_CHANGE", payload: amountText });
  };
  const categoryChangeHandler = (e) => {
    const categoryText = e.target.value;
    dispatch({ type: "CATEGORY_CHANGE", payload: categoryText });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAdd(formState);
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
          <select name="category" onChange={categoryChangeHandler}>
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
