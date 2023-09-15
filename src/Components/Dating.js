// Example usage in your Dating.js or any other component
import React from 'react';
import ProfileCard from '../Components/ProfileCard';

function Dating() {
  // Sample profile data
  const profileData = {
    name: 'John Doe',
    age: 28,
    location: 'New York',
    interests: ['Hiking', 'Reading', 'Cooking'],
  };

  return (
    <div>
      <ProfileCard profile={profileData} />
    </div>
  );
}

export default Dating;
