import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:3001');

function App() {
  const [color, setColor] = useState('#282c34');

  useEffect(() => {
    socket.on('receive', (newColor) => {
      setColor(newColor);
    });

    return () => {
      socket.off('receive');
    };
  }, []);

  const handleChangeComplete = (event) => {
    const newColor = event.target.value;
    setColor(newColor);
    socket.emit('newColor', newColor);
  };

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <header className="App-header">
        <h1>Color Changer</h1>
        <input
          type="color"
          value={color}
          onChange={handleChangeComplete}
        />
      </header>
    </div>
  );
}

export default App;
