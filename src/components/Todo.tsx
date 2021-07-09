import {IPropsTodo} from "./interfaces"

const Todo = ({todo, handleRemove}: IPropsTodo) => {
    return (
        <div>
            <p>{todo.task}</p>
            <p>{todo.day}</p>
            <button onClick={()=>handleRemove(todo.task)}>remove</button>
        </div>
    )
}

export default Todo;