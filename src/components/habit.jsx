import React from "react";

const Habit = ({ habit }) => {
  console.log(habit);
  //   const handleIncrement = () => {
  //     setCount(habit.count + 1);
  //   };
  //   const handledecrement = () => {
  //     setCount(habit.count - 1 < 0 ? 0 : habit.count - 1);
  //   };
  //   const handleDelete = () => {};

  return (
    <li className="habit">
      <span className="habit-name">{habit.name}</span>
      <span className="habit-count">{habit.count}</span>
      <button
        className="habit-button habit-increase"
        //   onClick={handleIncrement}
      >
        <i className="fas fa-plus-square"></i>
      </button>

      <button
        className="habit-button habit-decrease"
        //   onClick={handledecrement}
      >
        <i className="fas fa-minus-square"></i>
      </button>

      <button className="habit-button habit-delete">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default Habit;
