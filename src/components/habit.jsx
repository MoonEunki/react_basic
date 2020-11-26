import React, { useState } from "react";

const Habit = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handledecrement = () => {
    setCount(count - 1 < 0 ? 0 : count - 1);
  };
  //   const handleDelete = () => {};

  return (
    <li className="habit">
      <span className="habit-name">습관이름</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>

      <button className="habit-button habit-decrease" onClick={handledecrement}>
        <i className="fas fa-minus-square"></i>
      </button>

      <button className="habit-button habit-delete">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default Habit;
