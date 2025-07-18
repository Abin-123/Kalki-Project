import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BlogList.css'; // Reuse the same CSS file

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
      .then(res => {
        const found = res.data.find(b => b.id.toString() === id);
        setBlog(found);
      })
      .catch(err => {
        console.error("Failed to fetch blog:", err);
        alert("Error loading blog.");
      });
  }, [id]);

  if (!blog) return <div className="blog-container">Loading blog...</div>;

  return (
    <div className="blog-container">
      <h2 className="blog-title">{blog.heading}</h2>
      <img
        src={blog.photo}
        alt={blog.name}
        className="blog-image"
      />
      <p className="blog-meta"><strong>By:</strong> {blog.name}</p>
      <p className="blog-meta"><strong>Published:</strong> {blog.time}</p>
      <p className="blog-description">{blog.description}</p>

      <div className="blog-actions">
        <Link to={`/edit/${blog.id}`}>
          <button className="btn edit-btn">Edit</button>
        </Link>
        <Link to={`/delete/${blog.id}`}>
          <button className="btn delete-btn">Delete</button>
        </Link>
      </div>
    </div>
  );
}