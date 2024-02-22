// Todo.js component

import React, { useState } from 'react' 

export default function Todo({id, taskName, taskDescription, todoStatus, todos, setTodos}) {
    // State for editing mode and edited task details
    const [isEditing, setIsEditing] = useState(false)
    const [editedTaskName, setEditedTaskName] = useState(taskName)
    const [editedTaskDescription, setEditedTaskDescription] = useState(taskDescription)

    // Handle changing todo/task status
    const handleTodoStatusChange = (e) => {
        const newTodos = todos.map(todo => todo.id === id ? { ...todo, status: e.target.value} : todo)
        setTodos(newTodos)
    }

    // Toggle editing mode
    const handleEditClick = () => {
        setIsEditing(true)
    }

    // Save edited todo/task details
    const handleSaveClick = () => {
        const newTodos = todos.map(todo => todo.id === id ? 
            {...todo, name: editedTaskName, description: editedTaskDescription} : todo)

        setTodos(newTodos)
        setIsEditing(false)
    }

    // Delete a todo/task
    const handleDeleteClick = () => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    return (
        <div className='todo'>
            {/* Render input fields for editing */}
            {isEditing ? (
                <>
                    <input type="text" value={editedTaskName} 
                    onChange={(e) => setEditedTaskName(e.target.value)} />
                    <input type="text" value={editedTaskDescription} 
                    onChange={(e) => setEditedTaskDescription(e.target.value)}/>
                </>
            ) : (
                <>
                    <p className="todo-task-name">Name : {taskName}</p>
                    <p className="todo-task-description">Description : {taskDescription}</p>
                </>
            )}

            {/* Dropdown for toggling todo/task status */}
            <div className="todo-status-wrapper">
            <label htmlFor="status">Status</label>
            <select name="status" value={todoStatus} onChange={handleTodoStatusChange}>
                <option value="completed">Completed</option>
                <option value="notCompleted">Not Completed</option>
            </select>
            </div>
            {/* Render relevant buttons based on the editing mode */}
            {isEditing ? (
            <div>
                <button className="btn btn-saveTodo" type="button" onClick={handleSaveClick}>Save</button>
            </div>
            ) : (
                <div className="todo-btn-container">
                    <button className="btn btn-editTodo" type="button" onClick={handleEditClick}>Edit</button>
                    <button className="btn btn-deleteTodo" type="button" onClick={handleDeleteClick}>Delete</button>
                </div>
            )}
        </div>
    )
}

