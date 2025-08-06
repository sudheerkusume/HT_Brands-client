import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { loginStatus } from "../App";

const Login =() => {
  const [details, setDetails] = useState({  });
  const [token, setToken] = useContext(loginStatus);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const Changedata = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const Submithandler = (e) => {
    e.preventDefault();
    axios
      .post("https://htbrands-server.onrender.com/Ulogin", details)
      .then((res) => {
        console.log("Login response:", res.data)
        localStorage.setItem("usertoken", res.data.token);
        setToken(res.data.token);
      })
.catch((err) => {
  console.error("Login error:", err.response?.data || err.message); // 👈 debug log
  const msg = err.response?.data?.message || "Invalid credentials";
  setError(msg);
  setTimeout(() => setError(""), 3000);
});  };

  useEffect(() => {
    if (token) {
      navigate("/AccountPage");
    }
  }, [token, navigate]);

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={Submithandler}>
        <h2 className="login-title">LOGIN</h2>
        <p className="login-subtitle">If you have an account with us, please log in.</p>

        {error && <div className="login-error">{error}</div>}

<input
  type="email"
  name="email"
  placeholder="Email address"
  onChange={Changedata}
  required
  className="login-input"
  autoComplete="email"
/>
<input
  type="password"
  name="password"
  placeholder="Password"
  onChange={Changedata}
  required
  className="login-input"
  autoComplete="current-password"
/>

        <button type="submit" className="login-button">Sign in</button>

        <div className="login-links">
          <p>
            Don’t have an account? <NavLink to="/Signup">Create an account</NavLink>
          </p>
          <p>
            <NavLink to="/forgot-password">Forgot your password?</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
