import React from "react";

const HabitAddForm = (props) => {
  console.log(props);
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    //빈칸입력 안되게하는 예외처리는 안했음
    event.preventDefault();
    props.onAdd(inputRef.current.value); //input에 들어있는 습관 이름을 onAdd로 보냄
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
};

export default HabitAddForm;

{
  /* <HabitAddForm></HabitAddForm> */
}
