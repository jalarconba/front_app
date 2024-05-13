// Profile.js
import React from 'react';
import TabsContent from '../components/TabsContent';
import LoginForm from '../components/LoginForm';

const Profile = () => {
  return (
    <TabsContent>
      <h2>Profile</h2>
      <LoginForm/>
    </TabsContent>
  );
};

export default Profile;
