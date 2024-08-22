import React from "react";

const Expense = (props) => {
  const clickHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="expense">
      <div className="ex-name">
        <h2>{props.name}</h2>
      </div>
      <div className="ex-amount">
        <h3>{props.amount}</h3>
      </div>
      <button onClick={clickHandler}>Delete</button>
    </div>
  );
};

export default Expense;
