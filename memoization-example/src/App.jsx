import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <Header />
      <hr />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </>
  );
}

export default App;
