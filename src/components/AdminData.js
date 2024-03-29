import React, { useState } from 'react';
import "../styles/AdminStyles.css"

const AdminData = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Here you can implement your authentication logic
    // For simplicity, let's just check if username and password are not empty
    if (username !== '' && password !== '') {
      setLoggedIn(true);
      // You can also redirect the user to another page upon successful login
    } else {
      alert('Please enter a valid username and password');
    }
  };

  return (
    <div className="login-container">
      {loggedIn ? (
        <h1>Welcome, {username}!</h1>
      ) : (
        <div>
          <h1>Admin Login</h1>
          <br></br>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br><br></br>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default AdminData;
