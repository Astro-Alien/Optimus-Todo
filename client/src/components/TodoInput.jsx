import { useState } from "react";

export default function TodoInput(prop) {
    const { handleTodoState, todoValue, setTodoValue } = prop;

    const clickHandler = () => {
        if(todoValue == null || todoValue === "") return;
        handleTodoState(todoValue);
        setTodoValue("");
    }

    const changeHandler = (event) => {
        setTodoValue(event.target.value); 
    }

    return (
        <header id="content-container">
            <input id="content-input" placeholder="Enter todo..." onChange={changeHandler} value={todoValue}/>
            <button id="content-submit-button" onClick={clickHandler}>Add</button>
        </header>
    )
}