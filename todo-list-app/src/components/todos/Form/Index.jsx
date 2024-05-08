import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Form({todos, addTodos}) {
  const [newTodo, setNewTodo] = useState("");

  const onChangeInput = (e) => {
    setNewTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    const newTodoItem = {
        id: todos.length +1,
        text: newTodo,
        completed: false
    };
    addTodos([...todos, newTodoItem]);
    setNewTodo("");
  };


  return (
    <div>
      <form onSubmit={onSubmit}>
            <input
                className="new-todo"
                placeholder="What need to be done?"
                autoFocus
                value={newTodo}
                onChange={onChangeInput}
                />
        </form>
    </div>
  );
}

export default Form;
