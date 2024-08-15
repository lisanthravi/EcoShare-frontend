// frontend/src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './Homepage.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isSignup ? 'http://localhost:5000/api/auth/register' : 'http://localhost:5000/api/auth/login';
      const response = await axios.post(url, { email, password });
      
      if (isSignup) {
        setMessage('Signup successful');
      } else {
        setMessage('Login successful');
        // You might want to store the token in localStorage or context for authenticated routes
        console.log(response.data.token);
      }
    } catch (error) {
      setMessage(isSignup ? 'Signup failed' : 'Login failed');
      console.error(error);
    }
  };

  return (
      <div className="login">
      <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>
      <form onSubmit={handleSubmit}>
        <h3 className='l-em'>Email:</h3>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          className='l-in1'
          />
          <h3 className='l-pas'>Password:</h3>
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
          className='l-in1' 
          />
        <br></br>
        <button type="submit" className='l-sub'>{isSignup ? 'Sign Up' : 'Login'}</button>
      </form>
      <br></br>
      <br></br>
      <button className='l-sub1' onClick={() => setIsSignup(!isSignup)}>
        Switch to {isSignup ? 'Login' : 'Sign Up'}
      </button>
      {message && <p className='l-message'>{message}</p>}
    </div>
  );
};

export default Login;
