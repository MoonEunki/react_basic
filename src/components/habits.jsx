import React, { useState } from "react";
import Habit from "./habit";

const Habits = () => {
  const [habits, setCount] = useState([
    { id: 1, name: "1", count: 2 },
    { id: 2, name: "2", count: 2 },
    { id: 3, name: "3", count: 2 },
  ]);
  return (
    <ul>
      {habits.map((habit) => {
        return <Habit key={habit.id} habit={habit} />;
      })}
    </ul>
  );
};

export default Habits;
