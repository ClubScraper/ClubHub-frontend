import React from 'react' 
import ClubLogin from './pages/ClubLogin'
import ClubSignup from './pages/ClubSignup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<ClubLogin/>}/>
          <Route path='/clubsignup' element={<ClubSignup/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App