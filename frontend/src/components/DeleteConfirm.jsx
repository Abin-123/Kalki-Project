import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function DeleteConfirm() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteBlog = async () => {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      alert('Blog deleted successfully.');
      navigate('/blogs');
    };
    deleteBlog();
  }, [id, navigate]);

  return <div className="container">Deleting blog...</div>;
}
