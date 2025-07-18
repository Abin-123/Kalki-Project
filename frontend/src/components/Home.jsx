import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Welcome to My Blog</h1>
      <button onClick={() => navigate('/create')}>Create Blog</button>
      <button onClick={() => navigate('/blogs')}>Show Blogs</button>
    </div>
  );
}
