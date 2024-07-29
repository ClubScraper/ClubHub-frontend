import React, { useState } from 'react';
import { supabase } from '../client';

const StudentSignup = () => {

  const [formData, setFormData] = useState({
    clubname:'',email:'',password:''
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
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              club_name: formData.clubname,
            }
          }
        }
      )
      if (error) throw error
      alert('Please check your email for the verification link')

    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="signup_page">
      <div className="loginbox">
        <h1 className='signup_header'>Club Signup</h1>
        <form id="signup" onSubmit={handleSubmit}>
          <div className="field">
            <input 
              name="clubname" 
              onChange={handleChange}
              required
            />
            <label htmlFor="number" className="label-wrapper">
              <span className="label-text">Club Name</span>
            </label>
          </div>
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
      </div>
    </div>
  );
}

export default StudentSignup;
