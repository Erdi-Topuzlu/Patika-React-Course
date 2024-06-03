import { useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <ul>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="about">About Us</Link>
          </li>
          <li>
            <Link to="users">Users</Link>
          </li>
        </ul>
      </div>
    ),
  },
  {
    path: "home",
    element: <div>Home</div>,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "users",
    element: <div>Users</div>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
