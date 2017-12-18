import React, { Component } from 'react';

import { fetchPopularRepos } from '../utils/api';
import Popular from '../components/Popular';

export default class PopularContainer extends Component {
  state = {
    selectedLanguage: '',
    repos: null,
  };

  componentDidMount() {
    this.handleUpdateLanguage('All');
  }

  handleUpdateLanguage = (lang) => {
    if (this.state.selectedLanguage === lang) return;
    this.setState({
      selectedLanguage: lang,
      repos: null,
    });

    fetchPopularRepos(lang).then(repos => this.setState({ repos }));
  };

  render() {
    return (
      <Popular
        onSelect={this.handleUpdateLanguage}
        repos={this.state.repos}
        selectedLanguage={this.state.selectedLanguage}
      />
    );
  }
}
