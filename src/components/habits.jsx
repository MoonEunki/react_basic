import React, { useState } from "react";
import Habit from "./habit";

const Habits = () => {
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

    // habit의 아이디를 가지고,
    // habits의 아이디랑 비교해보고
    // filter를 통해서 ( true만 반환 )
  };

  return (
    <ul>
      {habits.map((habit) => {
        return (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
};

export default Habits;
