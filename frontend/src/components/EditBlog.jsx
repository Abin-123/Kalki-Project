import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EditBlog() {
  const { id } = useParams();
  const [form, setForm] = useState({
    name: '', photo: '', heading: '', description: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
      .then(res => {
        const blog = res.data.find(b => b.id.toString() === id);
        if (blog) setForm(blog);
        else navigate('/blogs');
      });
  }, [id, navigate]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/blogs/${id}`, form);
    alert('Blog updated successfully!');
    navigate(`/blog/${id}`);
  };

  return (
    <div className="container">
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} required /><br/>
        <input name="photo" value={form.photo} onChange={handleChange} required /><br/>
        <input name="heading" value={form.heading} onChange={handleChange} required /><br/>
        <textarea name="description" value={form.description} onChange={handleChange} required /><br/>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
