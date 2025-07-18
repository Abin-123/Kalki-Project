import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BlogList.css';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
      .then(res => setBlogs(res.data))
      .catch(err => console.error('Error loading blogs:', err));
  }, []);

  return (
    <div className="blog-container">
      <h2 className="blog-title">📝 All Blog Posts</h2>
      <ul className="blog-list">
        {blogs.length === 0 ? (
          <p>No blogs available yet.</p>
        ) : (
          blogs.map((blog, index) => (
            <li key={index} className="blog-item">
              {blog.imagePath && (
                <img
                  src={`http://localhost:5000${blog.imagePath}`}
                  alt="Blog"
                  className="blog-image"
                />
              )}
              <Link to={`/blog/${index}`} className="blog-link">
                {blog.content.slice(0, 40)}...
              </Link>
              <p className="blog-snippet">{blog.content.slice(40, 120)}...</p>
              <p className="blog-meta">
                <strong>Published:</strong> {new Date(blog.createdAt).toLocaleString()}
              </p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}