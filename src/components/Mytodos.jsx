import './Mytodos.css';

const Mytodos = ({ todos, removeTodo, editTodo, filterStatus }) => {
  const handleEdit = (id, name, description) => {
    const newName = prompt('Enter new name:', name);
    const newDescription = prompt('Enter new description:', description);

    if (newName !== null && newDescription !== null) {
      editTodo(id, { id, name: newName, description: newDescription });
    }
  };

  const filteredTodos = filterStatus === 'All' ? todos : todos.filter(todo => todo.status === filterStatus);
   
  const colorStyle = {
    backgroundColor: '#13AD89' // Corrected syntax for background color
  };
  const colorDone ={
    backgroundColor : "red"
  };

  return (
    <div className='Mytodos'>
      {filteredTodos.map(todo => (
        <div key={todo.id} className="todo-box">
          <div className="col todo-details">
            <p>Name: {todo.name}</p>
            <p>Description: {todo.description}</p>
            <div className="status-container">
              <strong>Status:</strong>
              <select className="dropdown selection" value={todo.status} onChange={(e) => editTodo(todo.id, { ...todo, status: e.target.value })}>
                <option value="Not Completed" style={colorDone}>Not Completed</option>
                <option value="Completed" style={colorStyle}>Completed</option>
              </select>
            </div>
            <div className='text-end px-3'>
              <button className='edit mx-4' onClick={() => handleEdit(todo.id, todo.name, todo.description)}>Edit</button>
              <button className='Delete' onClick={() => removeTodo(todo.id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mytodos;
