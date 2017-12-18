import React from 'react';
import { arrayOf, object } from 'prop-types';

import RepoItem from './RepoItem';

RepoGrid.propTypes = {
  repos: arrayOf(object).isRequired,
};

// Parent: Popular, Children: RepoItem(s)
export default function RepoGrid({ repos }) {
  const repoComponents = repos.map((repo, index) => (
    <RepoItem key={repo.name} repo={repo} rank={index + 1} />
  ));
  return <ul className="popular-list">{repoComponents}</ul>;
}
