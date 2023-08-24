// Login.js
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Login.css'; // Import the Login.css file

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here (e.g., check username and password)
    const requestData = {
      email: email,
      password: password
    };

    fetch('/api/admin/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        
        if (data.login) {
          console.log("Succesfully Logged In");
          localStorage.setItem('jwtToken', data.token);
          navigate('/');
        } else {
          console.log("Invalid Login Credentials");
        }
      })
      .catch(error => {
        console.error(error);
        // Handle other errors
      });
    // console.log('Username:', username);
    // console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Username</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
