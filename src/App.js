// App.js

import React, {useState, useEffect} from 'react'
import './App.css';
import TodoList from './components/TodoList';


function App() {
  // State for input fields and todos
  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")
  const [todos, setTodos] = useState([])
  console.log(input1, input2)
  console.log(todos)


  // Load todos from localStorage when the component renders
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
  }, [])

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // handle adding a new todo
  function handleClick() {
    const todo = {
      id: crypto.randomUUID(),
      name: input1,
      description: input2,
      status: "notCompleted"
    }

    setTodos([...todos, todo])
    setInput1("")
    setInput2("")
  }

  return (
    <div className="App">
      {/* App Heading */}
      <h1 className="App-heading">My todo</h1>
      {/* Input fields and a button for adding a new task/todo */}
      <div className="mytodo-wrapper">
        <input className="input-mytodo" value={input1} placeholder="Todo Name" onChange={(e) => setInput1(e.target.value)} />
        <input className="input-mytodo" value={input2} placeholder="Todo Description" onChange={(e) => setInput2(e.target.value)} />
        <button className="btn-mytodo" type="button" onClick={handleClick}>Add Todo</button>
      </div>
      {/* TodoList component to display todos */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
