import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  const validateField = (name, value) => {
    let errorMsg = '';

    if (name === 'id') {
      if (!value.trim()) {
        errorMsg = "Staff ID must be provided.";
      } else if (value.trim().length < 12) {
        errorMsg = "It must be more than 12 letters";
      }
    }

    if (name === 'password') {
      if (!value.trim()) {
        errorMsg = "Password must contain letters, symbols, and numbers";
      } else if (value.length < 8) {
        errorMsg = "Password should be at least 8 characters";
      }
    }

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: errorMsg,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.id.trim()) {
      validationErrors.id = "Staff ID must be provided.";
    } else if (formData.id.trim().length < 12) {
      validationErrors.id = "It must be more than 12 letters";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Password must contain letters, symbols, and numbers";
    } else if (formData.password.length < 8) {
      validationErrors.password = "Password should be at least 8 characters";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:8000/api/login/', formData);
        console.log(response.data);
        onLogin(); // Call the onLogin prop when form is successfully submitted
        navigate('/items'); // Redirect to /items after successful login
      } catch (error) {
        console.error('Error submitting form:', error);
        alert(error.response?.data?.error || 'Error during login');
      }
    }
  };

  return (
    <div className='login-wrapper'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Welcome Back!</h1>
          <h4>Please enter your credentials to sign in</h4>
          <div className="input-box">
            <label> Staff ID</label>
            <input 
              type="text" 
              name="id" 
              placeholder='Eg. GCB108976' 
              required 
              value={formData.id}
              onChange={handleChange} 
            /> 
            {errors.id && <span className="error">{errors.id}</span>}
          </div>
          <div className="input-box">
            <label> Password </label>
            <input 
              type="password" 
              name="password" 
              placeholder='Password' 
              required
              value={formData.password}
              onChange={handleChange} 
            /> 
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div className="remember-forgot">
            <label> <input type="checkbox"/> Remember me</label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;