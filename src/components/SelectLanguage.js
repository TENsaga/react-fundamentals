import React from 'react';
import { string, func } from 'prop-types';

SelectLanguage.propTypes = {
  selectedLanguage: string.isRequired,
  onSelect: func.isRequired,
};

// SelectLanguage is in Popular
export default function SelectLanguage({ selectedLanguage, onSelect }) {
  const languages = [ 'All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python' ].map(lang => (
    <li
      key={lang}
      style={lang === selectedLanguage ? { color: '#d0021b' } : null}
      onClick={() => onSelect(lang)}
    >
      {lang}
    </li>
  ));
  return <ul className="languages">{languages}</ul>;
}
