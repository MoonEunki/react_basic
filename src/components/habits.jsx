import React from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

const Habits = (props) => {
  const handleIncrement = (habit) => {
    props.onIncrement(habit);
  };

  const handleDecrement = (habit) => {
    props.onDecrement(habit);
  };

  const handleDelete = (habit) => {
    props.onDelete(habit);
  };

  const handleAdd = (name) => {
    // console.log("추가할이름" + name);
    props.onAdd(name);
  };

  return (
    <>
      <HabitAddForm onAdd={handleAdd} />
      <ul>
        {props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </>
  );
};

export default Habits;
