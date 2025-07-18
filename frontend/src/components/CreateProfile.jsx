import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Interface from './Interface';
import './CreateProfile.css';
 
export default function App() {
  const [showEditor, setShowEditor] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    description: '',
    photo: null,
  });
 
  const navigate = useNavigate();
 
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowEditor(true);
  };
 
  const handleCreateBlog = () => {
    navigate('/interface');
  };
 
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app-container">
            {!showEditor ? (
              <div className="card form-card">
                <h2 className="card-title">📝 Create Blog Profile</h2>
                <form onSubmit={handleSubmit} className="form-content">
                  <div className="form-grid">
                    {['name', 'title', 'description'].map((field) => (
                      <div key={field} className="form-group">
                        <label className="form-label">
                          {field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        <input
                          type="text"
                          name={field}
                          placeholder={`Enter ${field}`}
                          value={formData[field] || ''}
                          onChange={handleChange}
                          required
                          className="form-input"
                        />
                      </div>
                    ))}
                  </div>
 
                  <div className="form-group">
                    <label className="form-label">Photo</label>
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
 
                  <button type="submit" className="submit-button">
                    Continue to Blog Editor
                  </button>
                </form>
              </div>
            ) : (
              <div className="card profile-card">
                <h1 className="card-title">Welcome, {formData.name} 👋</h1>
                <div className="profile-info">
                  {formData.photo && (
                    <img
                      src={URL.createObjectURL(formData.photo)}
                      alt="Blog"
                      className="profile-photo"
                    />
                  )}
                  <div>
                    <p className="profile-title">📝 {formData.title}</p>
                    <p className="profile-description">{formData.description}</p>
                  </div>
                </div>
 
                <div className="continue-link">
                  <button onClick={handleCreateBlog} className="continue-button">
                    ✍️ Create Blog
                  </button>
                </div>
              </div>
            )}
          </div>
        }
      />
      <Route path="/interface" element={<Interface />} />
    </Routes>
  );
}