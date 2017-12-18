import React, { Component } from 'react';

import fetchPopularRepos from '../utils/api';
import SelectLanguage from './SelectLanguage';
import RepoGrid from './RepoGrid';
import Loading from './Loading';

// Parent: App, Children: SelectLanguage, RepoGrid
export default class Popular extends Component {
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
    const { selectedLanguage, repos } = this.state;
    return (
      <div>
        <SelectLanguage selectedLanguage={selectedLanguage} onSelect={this.handleUpdateLanguage} />
        {!repos ? <Loading /> : <RepoGrid repos={repos} />}
      </div>
    );
  }
}
