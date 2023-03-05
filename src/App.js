import React from 'react'
import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import Login from './components/Account/Login';
import CreateAccount from './components/Account/CreateAccount';
import Contact from './components/contact/Contact';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />}  />
          <Route exact path='/signup' element={<CreateAccount />}  />
          <Route exact path='/contact' element={<Contact />}  />

          
          
        </Routes>
      </Router>
    </div>
  )
}

export default App