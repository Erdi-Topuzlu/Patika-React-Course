import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    const increase = () =>{
        setCount(count + 1);
    }

  return (
    <div>
    <h1>Counter</h1>
    <h2>{count}</h2>
    <button onClick={()=>{setCount(count - 1);}}>Decrease</button>
    <button onClick={increase}>Increase</button>
    </div>
  )
}

export default Counter
