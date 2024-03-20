// App.js
import Mytodos from "./components/Mytodos";
import "./App.css";
import { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState('All');

  const addTodo = (e) => {
    e.preventDefault();
    
    const newTodo = {
      id: todos.length + 1,
      name: e.target.name.value,
      description: e.target.desc.value,
      status: "Not Completed" // Add status property
    };

    setTodos([...todos, newTodo]);

    // Clear the input
    e.target.name.value = '';
    e.target.desc.value = '';

    // Set the focus back to the input
    e.target.name.focus();
    e.target.desc.focus();
  };
 
  const removeTodo = (id) => {
    setTodos(todos.filter(item => item.id !== id));
  };

  const editTodo = (id, editedTodo) => {
    setTodos(todos.map(todo => (todo.id === id ? editedTodo : todo)));
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  return (
    <div>
      <form className="form g-1 py-5" onSubmit={addTodo}>
        <h2 className='text-center py-4 heading'>My Todo</h2>
        <div className='container'>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col text-center">
              <input className="form-control name border border-2" type="text" placeholder="Todo Name" aria-label="default input example" name='name' required />
            </div>
            <div className="col text-center">
              <input className="form-control description border border-2" type="text" placeholder="Todo Description" aria-label="default input example" name='desc' required />
            </div>
            <div className="col text-center">
              <button type='submit' className='todobtn p-2 px-5'>Add Todo</button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col text-start">
              <h4>My todos:</h4>
            </div>
            <div className="col-3 text-end">
              <select className="form-select status" value={filterStatus} onChange={handleFilterChange}>
                <option value="All">All</option>
                <option value="Not Completed">Not Completed</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      <Mytodos todos={todos} removeTodo={removeTodo} editTodo={editTodo} filterStatus={filterStatus} />
    </div>
  );
};

export default App;
