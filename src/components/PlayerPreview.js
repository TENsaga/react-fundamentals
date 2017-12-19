import React from 'react';
import { string, func } from 'prop-types';

PlayerPreview.propTypes = {
  id: string.isRequired,
  avatar: string.isRequired,
  username: string.isRequired,
  onReset: func.isRequired,
};

export default function PlayerPreview({
  id, avatar, username, onReset,
}) {
  return (
    <div className="column">
      <img className="avatar" src={avatar} alt={`Avatar for ${ username }`} onError={() => onReset(id)} />
      <h2 className="username">@{username}</h2>
      <button className="reset" onClick={() => onReset(id)}>
        Reset
      </button>
    </div>
  );
}
