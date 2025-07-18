// Interface.js
import React, { useState } from 'react';
import './Interface.css';

export default function Interface() {
  const [postContent, setPostContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handlePost = async () => {
    if (!postContent.trim()) {
      alert('Please write something before posting.');
      return;
    }

    const formData = new FormData();
    formData.append('content', postContent);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    try {
      const response = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
       
        body: formData,
      });

      if (response.ok) {
        alert('Post submitted successfully!');
        setPostContent('');
        setImageFile(null);
        setPreviewUrl(null);
      } else {
        alert('Failed to submit post.');
      }
    } catch (error) {
      console.error('Error submitting post:', error);
      alert('Error submitting post.');
    }
  };

  return (
    <div className="interface-container">
      <div className="editor-card">
        <div className="editor-header">
          <h2 className="editor-title">📝 Write Your Blog Post</h2>
          <button className="post-button" onClick={handlePost}>
            Post
          </button>
        </div>

        <div className="image-upload">
          <label className="image-upload-label">
            📷 Upload Image
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>
        </div>

        {previewUrl && (
          <div className="image-preview">
            <img src={previewUrl} alt="Preview" />
          </div>
        )}

        <textarea
          className="editor-textarea"
          placeholder="Start writing your thoughts here..."
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
      </div>
    </div>
  );
}
