import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="container" style={{ marginTop: '10%' }}>
      <div className="login-grid">
        <div className="login-text">
          <h2>Login</h2>
        </div>
        
        <div className="login-text">
          {/* Link updated to point towards the intended route instead of an .html file */}
          Are you a new member? <span><a href="/signup" style={{ color: '#2190FF' }}> Sign Up Here</a></span>
        </div>
        
        <br />

        <div className="login-form">
          <form>
            {/* Email Input Field */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required 
                className="form-control" 
                placeholder="Enter your email" 
                aria-describedby="helpId" 
              />
            </div>

            {/* Password Input Field */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
              />
            </div>

            {/* Action Buttons */}
            <div className="btn-group">
              <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button> 
              <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
            </div>

            <br />
            
            <div className="login-text">
              Forgot Password?
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;