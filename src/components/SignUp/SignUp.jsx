import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" required />
        </div>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
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
