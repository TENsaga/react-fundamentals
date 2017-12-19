import React, { Component } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import { object, string } from 'prop-types';

import Player from './Player';
import * as api from '../utils/api';

// Parent: Battle
export default class Results extends Component {
  static propTypes = {
    location: object.isRequired,
    search: string.isRequired,
  };

  state = {
    winner: null,
    loser: null,
    error: null,
    loading: true,
  };

  componentWillMount() {
    const { playerOneName, playerTwoName } = queryString.parse(this.props.location.search);
    api.battle([ playerOneName, playerTwoName ]).then((results) => {
      if (!results) {
        this.setState({
          error: 'Looks like there was an error. Check that both users exist on Github',
          loading: false,
        });
      }
      this.setState({
        winner: results[ 0 ],
        loser: results[ 1 ],
        error: null,
        loading: false,
      });
    });
  }

  render() {
    const {
      winner, loser, error, loading,
    } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return (
        <div>
          <p>{error}</p>;
          <Link to="/battle">Reset</Link>
        </div>
      );
    }

    return (
      <div className="row">
        <Player label="Winner" score={winner.score} profile={winner.profile} />
        <Player label="Loser" score={loser.score} profile={loser.profile} />
      </div>
    );
  }
}
