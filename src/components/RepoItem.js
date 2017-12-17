import React, { Component } from 'react';
import PropTypes from 'prop-types';

RepoItem.propTypes = {
  rank: PropTypes.number.isRequired,
  repo: PropTypes.object.isRequired
};

// RepoItem(s) are in RepoGrid
export default function RepoItem({ repo, rank }) {
  const {
    name,
    html_url,
    stargazers_count,
    owner: { login, avatar_url }
  } = repo;
  return (
    <li className="popular-item">
      <div className="popular-rank">#{rank}</div>
      <ul className="popular-list-items">
        <img className="avatar" src={avatar_url} alt={`Avatar for ${login}`} />
        <li>
          <a href={html_url}>{name}</a>
        </li>
        <li>@{login}</li>
        <li>{stargazers_count} stars</li>
      </ul>
    </li>
  );
};
