import { useState, useEffect } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && <Counter />}
      <br />
      <br />
      <button onClick={()=>{setIsVisible(!isVisible)}}>Toggle Counter</button>
    </>
  );
}

export default App;
