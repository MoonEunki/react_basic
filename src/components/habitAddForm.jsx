import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  console.log("AddForm");
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    //빈칸입력 안되게하는 예외처리는 안했음
    event.preventDefault();
    const name = inputRef.current.value;
    props.onAdd(name); //input에 들어있는 습관 이름을 onAdd로 보냄
    inputRef.current.value = ""; //입력후 빈칸으로
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        ref={inputRef}
        className="add-input"
        type="text"
        placeholder="Habit"
      ></input>
      <button className="add-button">추가</button>
    </form>
  );
});

export default HabitAddForm;
