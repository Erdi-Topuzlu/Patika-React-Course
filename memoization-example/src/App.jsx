import { useState, useCallback } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);

 const increment = useCallback(()=>{
  setNumber((prevState) => prevState + 1);
 }, []);

  return (
    <>
      <Header increment={increment} />
      <hr />
      <h1>{number}</h1>
    </>
  );
}


export default App;
