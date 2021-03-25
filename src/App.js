import React,{ useState,useEffect } from 'react'
// import './App.css';
import NavBar from './components/NavBar'

function App() {
  const [ userLoggedIn, setUserLoggedIn ] = useState(false)

  const handleAuth=()=>{
    setUserLoggedIn(!userLoggedIn)
  }

  useEffect(()=>{
    if(localStorage.getItem('token')){
      handleAuth()
    }
  },[])

  return (
    <div className="App">
      <h1>User Auth</h1>
      <NavBar userLoggedIn={userLoggedIn} handleAuth={handleAuth} />
      
    </div>
  );
}

export default App;
