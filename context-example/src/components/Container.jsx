import React from "react";
import Header from "./Header";
import Button from "./Button";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

function Container() {
    const {theme} = useContext(ThemeContext);

    console.log(theme);
  return (
    <div className={`app ${theme === 'light' ? theme : ""}`}>
      <Header />
      <hr />
      <Button />
    </div>
  );
}

export default Container;
