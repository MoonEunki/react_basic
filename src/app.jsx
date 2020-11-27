import "./app.css";
import Habits from "./components/habits";
import React, { useState } from "react";

const App = () => {
  const [habits, setCount] = useState([
    { id: 1, name: "노드", count: 2 },
    { id: 2, name: "리액트", count: 2 },
    { id: 3, name: "알고리즘", count: 2 },
  ]);
  const handleIncrement = (habit) => {
    const newHabits = [...habits];
    const index = newHabits.indexOf(habit);
    newHabits[index].count++;
    setCount(newHabits);
  };

  const handleDecrement = (habit) => {
    const newHabits = [...habits];
    const index = newHabits.indexOf(habit);
    const count = newHabits[index].count - 1;
    newHabits[index].count = count < 0 ? 0 : count;
    setCount(newHabits);
  };

  const handleDelete = (habit) => {
    const newHabits = habits.filter((item) => item.id !== habit.id);
    setCount(newHabits);
  };
  return (
    <Habits
      habits={habits}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onDelete={handleDelete}
    />
  );
};

export default App;
