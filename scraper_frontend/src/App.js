import React, { useState, useEffect } from 'react' 
import Mainpage from './pages/Mainpage'
import ClubLogin from './pages/ClubLogin'
import ClubSignup from './pages/ClubSignup'
import Calendar from './pages/Calendar'
import Admin from './pages/Admin'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [token, setToken] = useState(false)

    if(token) {
      sessionStorage.setItem('token', JSON.stringify(token))
    }

    useEffect(() => {
      if(sessionStorage.getItem('token')) {
        let data = JSON.parse(sessionStorage.getItem('token'))
        setToken(data)
      }
    }, [])

    return (
        <BrowserRouter>
          <Routes>            
            <Route path='/' element={<Mainpage/>}/>
            <Route path='/clublogin' element={<ClubLogin setToken={setToken}/>}/>
            <Route path='/clubsignup' element={<ClubSignup/>}/>
            <Route path='/calendar' element={<Calendar/>}/>
            {token?<Route path='/admin' element={<Admin/>}/>: ""}
          </Routes>
        </BrowserRouter>
    )
}

export default App