import React from "react";

const TodoList = ({ handleDelete, todos, handleEdit }) => {
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li className="singleTodo">
          <span className="todoText" key={t.id}>
            {t.todo}
          </span>
          <button onClick={() => handleEdit(t.id)}>Modify</button>
          <button onClick={() => handleDelete(t.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
