// src/Components/ProfileCard.js
import React from 'react';
import './ProfileCard.css'; // Import the CSS for styling

function ProfileCard({ profile }) {
  return (
    <div className="profile-card">
      <h2>{profile.name}</h2>
      <p>Age: {profile.age}</p>
      <p>Location: {profile.location}</p>
      <p>Interests: {profile.interests.join(', ')}</p>
    </div>
  );
}

export default ProfileCard;
