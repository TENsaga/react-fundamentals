import React, { Component } from 'react';

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
    const languages = [
      'All',
      'JavaScript',
      'Ruby',
      'Java',
      'CSS',
      'Python'
    ].map(lang => (
      <li
        key={lang}
        style={
          lang === this.state.selectedLanguage ? { color: '#d0021b' } : null
        }
        onClick={this.updateLanguage.bind(null, lang)}
      >
        {lang}
      </li>
    ));

    return <ul className="languages">{languages}</ul>;
  }
}

export default Popular;
