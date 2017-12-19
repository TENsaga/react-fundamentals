import React from 'react';
import { object } from 'prop-types';

import PlayerPreview from './PlayerPreview';

Profile.propTypes = {
  info: object.isRequired,
};

// Parent: Player, Children: PlayerPreview
export default function Profile({ info }) {
  return (
    <PlayerPreview username={info.login} avatar={info.avatar_url}>
      <ul className="space-list-items column">
        {info.name && <li>{info.name}</li>}
        {info.location && <li>{info.location}</li>}
        {info.company && <li>{info.company}</li>}
        <li>Followers: {info.followers}</li>
        <li>Following: {info.following}</li>
        <li>Public Repos: {info.public_repos}</li>
        {info.blog && (
          <li>
            <a href={info.blog}>{info.blog}</a>
          </li>
        )}
      </ul>
    </PlayerPreview>
  );
}
