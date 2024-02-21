import React, { useState } from 'react' 

export default function Todo({id, taskName, taskDescription, todoStatus, todos, setTodos}) {
    const [isEditing, setIsEditing] = useState(false)
    const [editedTaskName, setEditedTaskName] = useState(taskName)
    const [editedTaskDescription, setEditedTaskDescription] = useState(taskDescription)

    const handleTodoStatusChange = (e) => {
        const newTodos = todos.map(todo => todo.id === id ? { ...todo, status: e.target.value} : todo)
        setTodos(newTodos)
    }

    const handleEditClick = () => {
        setIsEditing(true)
    }

    const handleSaveClick = () => {
        const newTodos = todos.map(todo => todo.id === id ? 
            {...todo, name: editedTaskName, description: editedTaskDescription} : todo)

        setTodos(newTodos)
        setIsEditing(false)
    }

    const handleDeleteClick = () => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    return (
        <div className='todo'>
            {isEditing ? (
                <>
                    <input type="text" value={editedTaskName} 
                    onChange={(e) => setEditedTaskName(e.target.value)} />
                    <input type="text" value={editedTaskDescription} 
                    onChange={(e) => setEditedTaskDescription(e.target.value)}/>
                </>
            ) : (
                <>
                    <p>Name : {taskName}</p>
                    <p>Description : {taskDescription}</p>
                </>
            )}
            <label htmlFor="status">Status</label>
            <select name="status" value={todoStatus} onChange={handleTodoStatusChange}>
                <option value="completed">Completed</option>
                <option value="notCompleted">Not Completed</option>
            </select>
            {isEditing ? (
                <button type="button" onClick={handleSaveClick}>Save</button>
            ) : (
                <>
                    <button type="button" onClick={handleEditClick}>Edit</button>
                    <button type="button" onClick={handleDeleteClick}>Delete</button>
                </>
            )}
        </div>
    )
}


/*
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
*/