import React from 'react';
import { string, number, object } from 'prop-types';

import Profile from './Profile';

Player.propTypes = {
  label: string.isRequired,
  score: number.isRequired,
  profile: object.isRequired,
};

// Parent: Results, Children: Profile
export default function Player({ label, score, profile }) {
  return (
    <div>
      <h1 className="header">{label}</h1>
      <h3 style={{ textAlign: 'center' }}>Score: {score}</h3>
      <Profile info={profile} />
    </div>
  );
}
