import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css"
// import LoadingIndicator from "./LoadingIndicator";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className='login-wrapper'>
          <div className='wrapper'>
            <form onSubmit={handleSubmit}>
              <h1>Welcome Back!</h1>
              <h4>Please enter your credentials to sign in</h4>
              <div className="input-box">
                <label>Staff ID</label>
                <input
                  type="text"
                  name="id"
                  placeholder='Eg. GCB108976'
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

              </div>
              <div className="input-box">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder='Password'
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
    
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#">Forgot password?</a>
              </div>
    
              <button type="submit">{name}</button>
            </form>
          </div>
        </div>
      );
}

export default Form