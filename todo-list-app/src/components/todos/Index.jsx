import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Form from "./Form/Index";
import List from "./List/Index";
import Footer from "./Footer/Index";

function Todos() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn Javascript",
      completed: true,
    },
    {
      id: 2,
      text: "Learn React",
      completed: false,
    },
    {
      id: 3,
      text: "Have a Life",
      completed: false,
    },
  ]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <Form todos={todos} addTodos={setTodos}/>
        </header>
        <List todos={todos} addTodos={setTodos} />
        <Footer todos={todos} addTodos={setTodos} />
        </section>
     
    </>
  );
}

export default Todos;
