function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
      <li className={todo.completed ? "completed" : ""}>
        <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
        <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>X</button>
      </li>
    );
  }
  
  export default TodoItem;
  