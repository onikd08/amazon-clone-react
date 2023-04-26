import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(true);

  const { createUser } = useContext(AuthContext);

  // form submit event handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    // password validation
    if (password !== confirm) {
      setError("Password did not match");
      setSuccess(false);
      return;
    }
    if (password.length < 6) {
      setError("Password must contain at least 6 characters");
      setSuccess(false);
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setSuccess(true);
        form.reset();
      })
      .catch((error) => {
        setSuccess(false);
        setError(error.message);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up </h2>
      <small>onikd08@gmail.com</small>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input name="confirm" type="password" required />
        </div>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      {!success && <p style={{ color: "red" }}>{error}</p>}
      <p>
        <small>
          Already have an Account?
          <Link to="/login" style={{ color: "orange" }}>
            Login
          </Link>
        </small>
      </p>
      <button className="btn-google">Sign in with Google</button>
    </div>
  );
};

export default SignUp;
