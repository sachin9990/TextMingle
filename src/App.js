import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextWindow from './Components/TextWindow';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light') // By default the mode is light
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }

  const toggleMode = () => {
    if (mode === 'light') { // for enabling dark mode
      setMode('dark')
      document.body.style.backgroundColor = '#005b6a'
      showAlert("Dark Mode has been enabled", "success")
    }
    else {
      setMode('light') // for enabling light mode
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextMingle" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<TextWindow heading="Mingle with your text here by using the buttons below :-" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;