import React from 'react'
import './LoginPage.css';
const LoginPage = () => {
  return (
    <div className='wrapper'>
      <form action=''>
       
        <h1>Welcome back</h1>
        <h3>Please enter your credentials to sign in</h3>
        <div className="input-box">
          <label> Staff ID</label>
          <input type="text" placeholder='Username' required/>
        </div>
        <div className="input-box">
          <label> Password </label>
          <input type="password" placeholder='Password' required/>
        </div>

        <div className="remember-forgot">
          <label> <input type="checkbox"/>  Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit">Login</button>

        <div className="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
    
  )
}

export default LoginPage