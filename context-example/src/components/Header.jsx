import React from 'react'
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      Active Theme Color : {theme}
      <br />
      <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
    </div>
  )
}

export default Header
