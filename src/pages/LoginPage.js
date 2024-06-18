import React, {useState} from 'react';
import './LoginPage.css';
const LoginPage = () => {

  const [formData, setFormData] = useState({

    id: '',
    password: '',
  });

  const [errors,setErrors] = useState({})

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
    const {name, value} = e.target;
    setFormData({
      ...formData, [name] : value
    });
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {};

    if(!formData.id.trim()) {
      validationErrors.id= "Staff ID must be provided."
    } else if (formData.id.trim().length < 12) {
      validationErrors.id = "It must be more than 12 letters"
    }
    if (!formData.password.trim()) {
      validationErrors.password= "Password must contain letters, symbols and numbers"
    }else if(formData.password.length < 8){
      validationErrors.password = "Password should be at least 8 characters"
    }

    setErrors(validationErrors);

    if(Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully");
    }


  };

  return (
    <div className='wrapper'>
      {/*<form action=''>*/}
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
            onChange={handleChange} 
            /> 
            {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="remember-forgot">
          <label> <input type="checkbox"/>  Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit">Login</button>

        
      </form>
    </div>
    
  );
};

export default LoginPage