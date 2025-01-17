import React, { useState } from 'react';
import './App.css'; 


function SignupForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  

  const handleSubmit = (event) => {

    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div className="box">
      <div className="container">
        <div className="top header">
          <span>Don't have an account?</span>
          <header><b>Signup</b></header>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-field">
            Username: 
            <input 
              type="text" 
              name="username" 
              placeholder="Username" 
              required 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          <div className="input-field">
            Password: 
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <div className="input-submit">
            <input type="submit" value="Sign Up" />
          </div>
          <div className="bottom">
            <div className="left">
              <input 
                type="checkbox" 
                id="check" 
                checked={rememberMe} 
                onChange={() => setRememberMe(!rememberMe)} 
              />
              <label htmlFor="check">Remember me</label>
            </div>
            <div className="right">
              <label><a href="#">Trouble signing Up</a></label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;