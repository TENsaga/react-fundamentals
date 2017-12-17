import React from 'react';
import SelectLanguage from '../components/SelectLanguage';
import RepoGrid from '../components/RepoGrid';

// Popular is in PopularContainer, contains RepoGrid, SelectLanguage
export default function Popular({
  repos,
  selectedLanguage,
  onSelect: updateLanguage
}) {
  return (
    <div>
      <SelectLanguage
        selectedLanguage={selectedLanguage}
        onSelect={updateLanguage}
      />
      {!repos ? <p>Loading...</p> : <RepoGrid repos={repos} />}
    </div>
  );
}
