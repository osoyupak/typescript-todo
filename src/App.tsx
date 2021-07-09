import React, { FC, useState, ChangeEvent } from 'react';
import './App.css';
import { ITodo } from './components/interfaces';
import Todo from './components/Todo';

const App:FC = () => {
  
  const [task, setTask] = useState<string>("")
  const [day, setDay] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITodo[]>([])

  const handleChange = (event:ChangeEvent<HTMLInputElement>):void => {
    if(event.target.name==="task") {
      setTask(event.target.value)
    } else {
      setDay(Number(event.target.value))
    }
  }

  const handleOnClick = () => {
    const newTask:ITodo = {task: task, day: day};
    setTodoList([...todoList, newTask]);
    setTask("");
    setDay(0);
  }
  
  const handleRemove = (removedTodo:string):void => {
    setTodoList(todoList.filter((todo)=> removedTodo!=todo.task))
  }

  return (
    <div className="App">
      <h3>Todo App</h3>
      <div>
        <input 
          type="text"
          placeholder="type task here..."
          value={task}
          name="task"
          onChange= {handleChange}
        />
        <input 
          type="number"
          placeholder="remaining day"
          value={day}
          name="day"
          onChange= {handleChange}
        />
        <button onClick={handleOnClick}>Add</button>
      </div>
      <div> {todoList.map((todo)=> <Todo todo={todo} handleRemove= {handleRemove} />)} </div>
    </div>
  );
}

export default App;
