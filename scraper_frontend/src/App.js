import React from 'react' 
import Mainpage from './pages/Mainpage'
import ClubLogin from './pages/ClubLogin'
import ClubSignup from './pages/ClubSignup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
    return (
        <BrowserRouter>
          <Routes>            
            <Route path='/' element={<Mainpage/>}/>
            <Route path='/clublogin' element={<ClubLogin/>}/>
            <Route path='/clubsignup' element={<ClubSignup/>}/>
          </Routes>
        </BrowserRouter>
    )
}

export default App