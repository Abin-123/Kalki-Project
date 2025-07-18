import React, { useState } from "react";
import profileData from "../data/data.json";
import "./Content.css";

const Content = () => {
  const [profile, setProfile] = useState(profileData.profile);

  const handleDelete = () => {
    alert("Profile deleted (dummy function)");
    setProfile(null);
  };

  const handleEdit = () => {
    alert("Edit profile (dummy function)");
  };

  if (!profile) {
    return <p className="message">Profile has been deleted.</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div>
          <h1 className="profile-name">{profile.name}</h1>
          <p className="profile-date">Published on: {profile.datePublished}</p>
        </div>
        <div className="action-buttons">
          <button className="edit-btn" onClick={handleEdit}>✏️ Edit</button>
          <button className="delete-btn" onClick={handleDelete}>🗑️ Delete</button>
        </div>
      </div>

      <img src={profile.image} alt="Profile" className="profile-image" />

      <p className="profile-description">{profile.description}</p>
    </div>
  );
};

export default Content;
