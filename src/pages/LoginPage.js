import React from 'react'
import './LoginPage.css';
const LoginPage = () => {
  return (
    <div className='wrapper'>
      <form action=''>
       
        <h1>Welcome Back!</h1>
        <h4>Please enter your credentials to sign in</h4>
        <div className="input-box">
          <label> Staff ID</label>
          <input type="text" placeholder='Eg. GCB108976' required/>
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

        
      </form>
    </div>
    
  )
}

export default LoginPage