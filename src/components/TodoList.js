import React, { useState } from 'react'
import Todo from './Todo'

export default function TodoList({todos, setTodos}) {
    const [selectedStatusFilter, setSelectedStatusFilter] = useState("all")

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
        <div className='todo-list'>
            My Todos
            <label htmlFor="statusFilter">Status Filter :</label>
            <select name="statusFilter" value={selectedStatusFilter} 
            onChange={e => setSelectedStatusFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="notCompleted">Not Completed</option>
            </select>
            {filteredTodos.map((item) => (
                <Todo key={item.id} taskName={item.name} taskDescription={item.description}
                todoStatus={item.status} todos={todos} setTodos={setTodos} id={item.id} />
            ))}
        </div>
    )
}