// TodoList.js component

import React, { useState } from 'react'
import Todo from './Todo'

export default function TodoList({todos, setTodos}) {
    // State for filtering todos/tasks based on status
    const [selectedStatusFilter, setSelectedStatusFilter] = useState("all")


    // Filter todos/tasks based on their selected status
    const filteredTodos = todos.filter(item => {
        if(selectedStatusFilter === "all") {
            return true
        } else if (selectedStatusFilter === "completed") {
            return item.status === "completed"
        } else if (selectedStatusFilter === "notCompleted") {
            return item.status === "notCompleted"
        }
        return true
    })

    return (
        <div className="todo-list">
            <div className="todolistheader-wrapper">
                <h2>My Todos</h2>
                <div className="todolistselect-wrapper">
                    <label className="todolistselect-label" htmlFor="statusFilter">Status Filter :</label>
                    {/* Status filter dropdown */}
                    <select className="todolist-select" name="statusFilter" value={selectedStatusFilter} 
                    onChange={e => setSelectedStatusFilter(e.target.value)}>
                        <option className="todolistSF-option-all" value="all">All</option>
                        <option className="todolistSF-option-completed" value="completed">Completed</option>
                        <option className="todolistSF-option-notcompleted" value="notCompleted">Not Completed</option>
                    </select>
                </div>
            </div>
            {/* Render filtered todos using the Todo component */}
            <div className="todolist-container">
                {filteredTodos.map((item) => (
                    <Todo key={item.id} taskName={item.name} taskDescription={item.description}
                    todoStatus={item.status} todos={todos} setTodos={setTodos} id={item.id} />
                ))}
            </div>
        </div>
    )
}