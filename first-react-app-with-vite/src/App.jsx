import './App.css'
import Header from './components/Header'
import User from './components/User';

function App() {

  return (
    <>
      <Header />
      <User 
        name="Erdi" 
        surname="Topuzlu" 
        isLoggedIn={true} 
        age={32} 
        friends={["Serhan", "Onur", "Fırat"]}
        address={{
          city : "Avcılar / İstanbul",
          zip : 34315
        }} />
            
    </>
  )
}

export default App
