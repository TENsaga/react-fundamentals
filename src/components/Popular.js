import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SelectLanguage = ({ selectedLanguage, onSelect }) => {
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
};

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
  }

  updateLanguage = lang => {
    this.setState(() => ({ selectedLanguage: lang }));
  };

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    );
  }
}

export default Popular;
