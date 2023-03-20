import React from "react";

function Register() {
  return (
    <div className="form-container">
      <h1>Welcome!</h1>
      <div className="form-main">
        <form>
          <label>
            <span>Name</span>
            <input type="text" placeholder="Name..." />
          </label>
          <label>
            <span>Surname</span>
            <input type="text" placeholder="Surname..." />
          </label>
          <label>
            <span>Email</span>
            <input type="text" placeholder="Email..." />
          </label>
          <label>
            <span>Password</span>
            <input type="password" placeholder="Password..." />
          </label>
          <label>
            <span>Confirm Password</span>
            <input type="password" placeholder="Confirm Password..." />
          </label>
          <button type="submit">Create Account</button>
        </form>
      </div>
      <div className="form-footer">
        <p>
          Have an account? <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
