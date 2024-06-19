import React from 'react' 
import StudentLogin from './pages/StudentLogin'
import StudentSignup from './pages/StudentSignup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<StudentLogin/>}/>
          <Route path='/studentsignup' element={<StudentSignup/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App