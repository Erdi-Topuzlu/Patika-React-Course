import React from "react";
import Header from "./Header";
import Button from "./Button";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
import Profile from "./Profile";

function Container() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme === "light" ? theme : ""}`}>
      <Header />
      <hr />
      <Button />
      <hr />
      <Profile />
    </div>
  );
}

export default Container;
