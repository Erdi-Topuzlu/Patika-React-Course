import './App.css'
import Header from './components/Header'

const name = "Erdi";
const surname = "Topuzlu";
const isLoggedIn = false;

function App() {

  return (
    <>
      <Header />
      <h1>{isLoggedIn ? name + " " + surname : "Giriş Yapın!"}</h1>
    </>
  )
}

export default App
