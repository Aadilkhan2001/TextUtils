import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import About from './components/About'
import Alert from './components/Alert'
import React from 'react'
import { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {

  const [theme, settheme] = useState('light');
  const [alert, setalert] = useState(null);
  const [dark,setdark] = useState(false);
  

  if( dark === true && theme === 'yellow' )
  {
    document.body.style.backgroundColor='#58580d';
    document.body.style.color='white';
  }
  else if( dark === true && theme === 'red' )
  {
    document.body.style.backgroundColor='#701010';
    document.body.style.color='white';
  }
  else if( dark === true && theme === 'magenta' )
  {
    document.body.style.backgroundColor='#681768';
    document.body.style.color='white';
  }
  else if( dark === true && theme === 'light' )
  {
    document.body.style.backgroundColor='#212529';
    document.body.style.color='white';
  }
  else
  {
    document.body.style.backgroundColor='white';
    document.body.style.color='black'
  }


  
 

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };


  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" about="About" setdark={setdark} dark={dark} theme={theme} showalert={showAlert} settheme={settheme} />
      <Alert alert={alert} />
      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About heading="About Us" />}/> */}
          <Textform heading="Enter text to analyze" theme={theme} dark={dark} showalert={showAlert} />
          <About heading="About Us" />
          {/* <Route exact path="/" element={<Textform heading="Enter text to analyze" theme={theme} dark={dark} showalert={showAlert} />}/> */}
          
        {/* </Routes> */}
      
      {/* // </Router> */}
     
    </>
  );
}


export default App;

