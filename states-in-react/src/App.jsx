import { useState } from 'react'
import './App.css'
import Counter from './components/Counter';

function App() {

  const [name, setName] = useState("Erdi");
  const [age, setAge] = useState(32);
  const [friends, setFriends] = useState(["Fırat", "Onur"]);
  const [address, setAddress] = useState({city:"İstanbul", zip:34315});

  return (
    <>
      <Counter />

      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => {setName("Serhan");}}>Change Name</button>
      <button onClick={() => {setAge(33);}}>Change Age</button>

      <hr />
      <br />
      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      
      <button onClick={() => {setFriends([...friends, "Erkut"]);}}>Add New Friend</button>

      <hr />
      <br />
      <h2>Address</h2>
      <div>{address.city} {address.zip}</div>

      <button onClick={() => {setAddress({...address, city:"Ankara"});}}>Add New Friend</button>

    </>
  )
}

export default App
