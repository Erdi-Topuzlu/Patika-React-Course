import React from "react";
import { useState } from "react";

function Footer({ todos, addTodos, setFilter }) {
  const [filter, setFilterState] = useState("all");

  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  const handleFilterChange = (filter) => {
    setFilterState(filter); // Yeni filtre değerini ayarla
    setFilter(filter); // Bu işlevi List bileşenine iletmek için kullanılıyor
  };

  const clearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    addTodos(updatedTodos);
  };

  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong>{remainingTodos}</strong>
          {remainingTodos === 1 ? " item" : " items"} left
        </span>

        <ul className="filters">
          <li>
            <a
              href="#/"
              className={filter === "all" ? "selected" : ""}
              onClick={(e) => {
                handleFilterChange("all");
                e.preventDefault();
              }}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={filter === "active" ? "selected" : ""}
              onClick={(e) => {
                handleFilterChange("active");
                e.preventDefault();
              }}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={filter === "completed" ? "selected" : ""}
              onClick={(e) => {
                handleFilterChange("completed");
                e.preventDefault();
              }}
            >
              Completed
            </a>
          </li>
        </ul>

        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    </>
  );
}

export default Footer;
