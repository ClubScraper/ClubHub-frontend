import React from 'react';

function StudentLogin() {

  return (
    <div className="loginbox">
      <h1>Club Login</h1>
      <div className="popup">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Cross_red_circle.svg/1024px-Cross_red_circle.svg.png" 
          id="popup-icon" 
          alt="Incorrect Login"
        />
        <p id="popup-text">Incorrect Login Credentials</p>
      </div>
      <form method="POST">
        <div className="field">
          <input 
            type="text" 
            name="number" 
            autoComplete="off" 
            required 
            id="student-num" 
            maxLength="9"
          />
          <label htmlFor="number" className="label-wrapper">
            <span className="label-text">Club Name</span>
          </label>
        </div>
        <div className="field">
          <input 
            type="password" 
            name="password" 
            autoComplete="off" 
            required 
            id="password"
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
