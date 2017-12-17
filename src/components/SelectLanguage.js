import React, { Component } from 'react';
import PropTypes from 'prop-types';

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

// SelectLanguage is in Popular
export default function SelectLanguage({ selectedLanguage, onSelect }) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'].map(
    lang => (
      <li
        key={lang}
        style={lang === selectedLanguage ? { color: '#d0021b' } : null}
        onClick={onSelect.bind(null, lang)}
      >
        {lang}
      </li>
    )
  );
  return <ul className="languages">{languages}</ul>;
}
