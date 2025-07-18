import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function AuthPage() {
  const { action, id } = useParams();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();

    // Simple demo check (in real apps, use backend + hashed passwords!)
    if (username === 'admin' && password === '1234') {
      if (action === 'edit') {
        navigate(`/edit/${id}`);
      } else if (action === 'delete') {
        navigate(`/confirm-delete/${id}`);
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <h2>Authentication Required</h2>
      <form onSubmit={handleLogin}>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required /><br/>
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required /><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
