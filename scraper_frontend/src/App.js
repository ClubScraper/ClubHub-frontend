import React from 'react' 
import Mainpage from './pages/Mainpage'
import ClubLogin from './pages/ClubLogin'
import ClubSignup from './pages/ClubSignup'
import Calendar from './pages/Calendar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
    return (
        <BrowserRouter>
          <Routes>            
            <Route path='/' element={<Mainpage/>}/>
            <Route path='/clublogin' element={<ClubLogin/>}/>
            <Route path='/clubsignup' element={<ClubSignup/>}/>
            <Route path='/calendar' element={<Calendar/>}/>
          </Routes>
        </BrowserRouter>
    )
}

export default App