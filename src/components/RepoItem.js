import React from 'react';
import { number, object } from 'prop-types';

RepoItem.propTypes = {
  rank: number.isRequired,
  repo: object.isRequired,
};

// Parent: RepoGrid
export default function RepoItem({ repo, rank }) {
  const {
    name,
    html_url: html,
    stargazers_count: stars,
    owner: { login, avatar_url: avatar },
  } = repo;
  return (
    <li className="popular-item">
      <div className="popular-rank">#{rank}</div>
      <ul className="popular-list-items">
        <img className="avatar" src={avatar} alt={`Avatar for ${ login }`} />
        <li>
          <a href={html}>{name}</a>
        </li>
        <li>@{login}</li>
        <li>{stars} stars</li>
      </ul>
    </li>
  );
}
