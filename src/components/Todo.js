import React from 'react' 

export default function Todo({id, taskName, taskDescription, todoStatus, todos, setTodos}) {

    const handleTodoStatusChange = (e) => {
        const newTodos = todos.map(todo => todo.id === id ? { ...todo, status: e.target.value} : todo)
        setTodos(newTodos)
    }

    const handleEditClick = () => {
        console.log("edit")
    }

    const handleDeleteClick = () => {
        console.log("delete")
    }

    return (
        <div>
            Todo
            <p>Name : {taskName}</p>
            <p>Description : {taskDescription}</p>
            <label htmlFor="status">Status</label>
            <select name="status" value={todoStatus} onChange={handleTodoStatusChange}>
                <option value="completed">Completed</option>
                <option value="notCompleted">Not Completed</option>
            </select>
            <button type="button" onClick={handleEditClick}>Edit</button>
            <button type="button" onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}