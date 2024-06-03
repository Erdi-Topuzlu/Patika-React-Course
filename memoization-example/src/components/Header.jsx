import React from 'react'

function Header({data}) {
    console.log("Header Component Re-rendered");
  return (
    <div>
      Header
      <br />
      <br />
      <code>
        {JSON.stringify(data)}
      </code>
    </div>
  )
}

export default React.memo(Header);
