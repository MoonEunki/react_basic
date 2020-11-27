import "./app.css";
import Habits from "./components/habits";
import React, { useState } from "react";
import Navbar from "./components/navbar";

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

  const handleAdd = (name) => {
    // const newHabits = [...habits];
    // newHabits.push({ id: Date.now(), name: name, count: 0 });

    const newHabits = [...habits, { id: Date.now(), name, count: 0 }];

    setCount(newHabits);
  };
  return (
    <>
      <Navbar totalCount={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        onAdd={handleAdd}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
      />
    </>
  );
};

export default App;
