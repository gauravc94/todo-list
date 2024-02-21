import React, {useState} from 'react'
import './App.css';
import TodoList from './components/TodoList';


function App() {
  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")
  const [todos, setTodos] = useState([])
  console.log(input1, input2)
  console.log(todos)

  function handleClick() {
    const todo = {
      id: crypto.randomUUID(),
      name: input1,
      description: input2,
      status: "notCompleted"
    }

    setTodos([...todos, todo])
  }

  return (
    <div className="App">
      <input value={input1} onChange={(e) => setInput1(e.target.value)} />
      <input value={input2} onChange={(e) => setInput2(e.target.value)} />
      <button type="button" onClick={handleClick}>Add Todo</button>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
