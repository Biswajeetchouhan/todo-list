
import './App.css';
import React, { useState } from 'react';
import Navbar from './Component/Navbar';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    
    <div className="App1">
    <Navbar/>
   


    <div className="App" container="size">
    <h1>React To-Do List</h1>
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      
      <button type="button" class="btn btn-primary" style={{ marginLeft: '8px' }} onClick={addTask}>Add</button>
    </div>
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button type="button" class="btn btn-danger" style={{ marginLeft: '8px' }} onClick={() => removeTask(index) }>Remove</button>
        </li>
      ))}
    </ul>
  </div>
  </div>
);
}
  



export default App;
