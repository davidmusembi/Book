import React, { useState } from 'react';
import './App.css';

const AdminPage = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // TODO: Submit the user data to the server
    console.log('Submitting user:', user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Register User</button>
    </form>
  );
};

export default AdminPage;
