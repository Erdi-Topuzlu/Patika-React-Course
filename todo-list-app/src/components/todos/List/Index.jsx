import React from "react";

function List({ todos, addTodos, filter }) {
  const toggleTodoCompletion = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    addTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    addTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    } else {
      return true;
    }
  });

  const remainingTodos = filteredTodos.filter((todo) => !todo.completed).length;

  return (
    <>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={remainingTodos === 0}
          onChange={() => {
            const allCompleted = remainingTodos === 0;
            const updatedTodos = todos.map((todo) => ({
              ...todo,
              completed: !allCompleted,
            }));
            addTodos(updatedTodos);
          }}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodoCompletion(todo.id)}
                />
                <label>{todo.text}</label>
                <button className="destroy" onClick={() => removeTodo(todo.id)}></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default List;
