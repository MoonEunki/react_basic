import React from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

const Habits = (props) => {
  console.log("Habits");
  const { habits, onAdd, onIncrement, onDecrement, onDelete, onReset } = props;
  const handleIncrement = (habit) => {
    onIncrement(habit);
  };

  const handleDecrement = (habit) => {
    onDecrement(habit);
  };

  const handleDelete = (habit) => {
    onDelete(habit);
  };

  const handleAdd = (name) => {
    // console.log("추가할이름" + name);
    onAdd(name);
  };

  const handleReset = () => {
    onReset();
  };

  return (
    <div>
      <HabitAddForm onAdd={handleAdd} />
      <ul>
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <button className="habits-reset" onClick={handleReset}>
        Reset All
      </button>
    </div>
  );
};

export default Habits;
