import React from 'react';
import { string, element } from 'prop-types';

PlayerPreview.propTypes = {
  avatar: string.isRequired,
  username: string.isRequired,
  children: element,
};

PlayerPreview.defaultProps = {
  children: null,
};

// Parent: Battle, Profile
export default function PlayerPreview({ avatar, username, children }) {
  return (
    <div className="column">
      <img className="avatar" src={avatar} alt={`Avatar for ${ username }`} />
      <h2 className="username">@{username}</h2>
      {children}
    </div>
  );
}
