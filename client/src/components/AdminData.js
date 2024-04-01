import React, { useState } from 'react';
import "../styles/AdminStyles.css";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AdminData = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  
  const handleLogin = () => {
    // Here you can implement your authentication logic
    // For simplicity, let's just check if username and password are not empty
    if (username !== '' && password !== '') {
      // Redirect to adminhomepage
      navigate('/adminhomepage');
    } else {
      alert('Please enter a valid username and password');
    }
  };

  return (
    <div className="login-container">
      <div>
        <h1>Admin Login</h1>
        <br />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default AdminData;
