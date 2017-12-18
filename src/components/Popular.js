import React from 'react';
import { arrayOf, object, string, func } from 'prop-types';

import SelectLanguage from '../components/SelectLanguage';
import RepoGrid from '../components/RepoGrid';

Popular.propTypes = {
  repos: arrayOf(object),
  selectedLanguage: string.isRequired,
  onSelect: func.isRequired,
};

Popular.defaultProps = {
  repos: null,
};

// Popular is in PopularContainer, contains RepoGrid, SelectLanguage
export default function Popular({ repos, selectedLanguage, onSelect: handleUpdateLanguage }) {
  return (
    <div>
      <SelectLanguage selectedLanguage={selectedLanguage} onSelect={handleUpdateLanguage} />
      {!repos ? <p>Loading...</p> : <RepoGrid repos={repos} />}
    </div>
  );
}
