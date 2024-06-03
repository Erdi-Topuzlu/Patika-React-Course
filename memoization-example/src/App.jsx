import { useState, useMemo } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);

  const data = useMemo(()=>{
    return calculateObject;
  }, []) ;

  return (
    <>
      <Header data={data} />
      <hr />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </>
  );
}

function calculateObject(){
  return { name: "Erdi"};
}

export default App;
