import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './Components/Main'
import Navbar from './Components/Navbar'

function App() {

  const title= "React-Alfred Teiko";
  
  const [toggleMode,setToggleMode] =useState(true);
  // console.log(toggleMode);

  return (
    <>
    <Navbar title={title}
    toggleMode={toggleMode}
    setToggleMode={setToggleMode}
    />
     <MainPage
     toggleMode={toggleMode}
     />
    </>
  )
}

export default App
