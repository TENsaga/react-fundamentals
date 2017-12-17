import React, { Component } from 'react';
import { fetchPopularRepos } from '../utils/api';
import Popular from '../components/Popular';

export default class PopularContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: '',
      repos: null
    };
  }

  componentDidMount() {
    this.updateLanguage('All');
  }

  updateLanguage = lang => {
    if (this.state.selectedLanguage === lang) return;
    this.setState(() => ({
      selectedLanguage: lang,
      repos: null
    }));

    fetchPopularRepos(lang).then(repos => this.setState({ repos: repos }));
  };

  render() {
    return (
      <Popular
        repos={this.state.repos}
        selectedLanguage={this.state.selectedLanguage}
        onSelect={this.updateLanguage}
      />
    );
  }
}
