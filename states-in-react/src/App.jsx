import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState("Erdi");
  const [age, setAge] = useState(32);

  return (
    <>
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => {setName("Serhan");}}>Change Name</button>
      <button onClick={() => {setAge(33);}}>Change Age</button>
    </>
  )
}

export default App
