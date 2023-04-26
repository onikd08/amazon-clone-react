import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(true);

  const location = useLocation();
  let from = location.state?.from?.pathname || "";

  // form submit event handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setSuccess(true);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setSuccess(false);
        setError(error.message);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      {!success && <p style={{ color: "red" }}>{error}</p>}
      <p>
        <small>
          New to Ema-John?
          <Link to="/signup" style={{ color: "orange" }}>
            Create an Account
          </Link>
        </small>
      </p>

      <button className="btn-google">Sign in with Google</button>
    </div>
  );
};

export default Login;
