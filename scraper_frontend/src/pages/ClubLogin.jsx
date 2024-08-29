import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const StudentLogin = ({setToken}) => {
  let navigate = useNavigate()

  const [formData, setFormData] = useState({
    email:'',password:''
  })

  console.log(formData)
  
  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }

  async function handleSubmit(e){    
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })
      if (error) throw error
      console.log(data)
      setToken(data)
      navigate('/admin')

    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="loginbox">
      <h1 className='login_header'>Club Login</h1>
      <form id="signup" onSubmit={handleSubmit}>
      <div className="field">
          <input 
            name="email" 
            onChange={handleChange}
            required
          />
          <label htmlFor="email" className="label-wrapper">
            <span className="label-text">Email</span>
          </label>
        </div>
        <div className="field">
          <input 
            name="password" 
            type="password"
            onChange={handleChange}
            required
          />
          <label htmlFor="password" className="label-wrapper">
            <span className="label-text">Password</span>
          </label>
        </div>
        <button type='submit' className="submit">
          Submit
        </button>
      </form>
      <div className="links">
        <a href="/clubsignup" className='accountlink'>Don't have an account?</a>
      </div>
    </div>   
  );
}

export default StudentLogin;
