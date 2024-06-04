import React from 'react'

function Header({increment}) {
    console.log("Header Component Re-rendered");
  return (
    <div>
      Header
      <br />
      <br />
      
      <button onClick={increment}>Click</button>
    </div>
  )
}

export default React.memo(Header);
