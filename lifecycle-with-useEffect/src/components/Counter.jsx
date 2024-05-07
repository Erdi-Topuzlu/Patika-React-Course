import React, { useEffect, useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Number State güncellendi.");
  }, [number]);

  useEffect(() => {
    console.log("Component Mount Edildi!");

    const interval = setInterval(()=>{
        setNumber((n)=> n+1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <>
      <h1>{number}</h1>
      <button onClick={()=>{setNumber(number + 1)}}>Click</button>



    </>
};

export default Counter;
