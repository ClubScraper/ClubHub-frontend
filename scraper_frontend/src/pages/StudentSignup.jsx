import React, { useEffect} from 'react';

function StudentSignup() {
  useEffect(() => {
    const form = document.getElementById('signup');
    const handleSubmit = (event) => {
      event.preventDefault(); 
      window.location.href = 'student_login.html';
    };

    form.addEventListener('submit', handleSubmit);

    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return (
    <div className="loginbox">
      <h1>Student Signup</h1>
      <form id="signup">
        <div className="field">
          <input 
            type="text" 
            name="number" 
            autoComplete="off" 
            maxLength="9" 
            required
          />
          <label htmlFor="number" className="label-wrapper">
            <span className="label-text">Student Number</span>
          </label>
        </div>
        <div className="field">
          <input 
            type="text" 
            name="email" 
            autoComplete="off" 
            required
          />
          <label htmlFor="email" className="label-wrapper">
            <span className="label-text">Email</span>
          </label>
        </div>
        <div className="field">
          <input 
            type="password" 
            name="password" 
            autoComplete="off" 
            required
          />
          <label htmlFor="password" className="label-wrapper">
            <span className="label-text">Password</span>
          </label>
        </div>
        <div className="submit">
          <input 
            type="submit" 
            value="Sign-up" 
            id="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default StudentSignup;
