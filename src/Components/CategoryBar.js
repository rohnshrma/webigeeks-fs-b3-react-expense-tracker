import React from "react";

const CategoryBar = (props) => {
  const clickHandler = (e) => {
    props.onSelect(e.target.innerText);
  };

  return (
    <div className="category-bar">
      <button onClick={clickHandler}>All</button>
      <button onClick={clickHandler}>Food</button>
      <button onClick={clickHandler}>Transport</button>
      <button onClick={clickHandler}>Entertainment</button>
      <button onClick={clickHandler}>Shopping</button>
    </div>
  );
};

export default CategoryBar;
