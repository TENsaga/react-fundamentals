import React from 'react';
import { string, func } from 'prop-types';

Player.propTypes = {
  id: string.isRequired,
  avatar: string.isRequired,
  username: string.isRequired,
  onClick: func.isRequired,
};

export default function Player({
  id, avatar, username, onClick,
}) {
  return (
    <div className="column">
      <img className="avatar" src={avatar} alt="User Avatar" />
      <h2>@{username}</h2>
      <button className="reset" onClick={() => onClick(id)}>
        Reset
      </button>
    </div>
  );
}
