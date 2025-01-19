import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState , useEffect } from "react";

export default function App() {
 const [todo, setTodo] = useState([]);
 const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
      localStorage.setItem('todo', JSON.stringify({
        todo: newList
      }))
  }

  function handleTodoState(newList) {
      const newListItem = [...todo, newList];
      persistData(newListItem);
      setTodo(newListItem);
  }
  
  function handleDeleteTodo(index) {
    const newTodoList = todo.filter((item,itemIndex) => {
        return index != itemIndex;
    });
    persistData(newTodoList);
    setTodo(newTodoList);
  }

  function handleEditTodo(index) {
      const valueToEdit = todo[index];
      setTodoValue(valueToEdit);
      handleDeleteTodo(index);
  }
  
  useEffect(() => {
    if (!localStorage) return;

    let localTodos = localStorage.getItem('todo');

    if(!localTodos) return; 

    localTodos = JSON.parse(localTodos).todo;
    setTodo(localTodos);
  }, []);
  
  return (
    <main>
       <TodoInput handleTodoState={handleTodoState} todoValue={todoValue} setTodoValue={setTodoValue}/>
       <TodoList todo={todo} deleteTodoItem={handleDeleteTodo} updateList={handleEditTodo}/>
    </main>
  )
}