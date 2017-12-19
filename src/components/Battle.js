import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';

import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

// Parent: App, Children: PlayerInput, PlayerPreview
export default class Battle extends Component {
  state = {
    playerOneName: '',
    playerTwoName: '',
    playerOneImage: null,
    playerTwoImage: null,
    playerOneReady: false,
    playerTwoReady: false,
  };

  handleChange = (e, id) => {
    const val = e.target.value;
    this.setState(() => {
      const newState = {};
      newState[ `${ id }Name` ] = val;
      return newState;
    });
  };

  handleSubmit = (e, id) => {
    e.preventDefault();
    this.setState((prevState) => {
      const newState = {};
      const username = prevState[ `${ id }Name` ];
      newState[ `${ id }Image` ] = `https://github.com/${ username }.png?size=200`;
      newState[ `${ id }Ready` ] = true;
      return newState;
    });
  };

  handleReset = (id) => {
    this.setState(() => {
      const newState = {};
      newState[ `${ id }Name` ] = '';
      newState[ `${ id }Image` ] = null;
      newState[ `${ id }Ready` ] = false;
      return newState;
    });
  };

  render() {
    const { match } = this.props;
    const {
      playerOneReady,
      playerTwoReady,
      playerOneName,
      playerTwoName,
      playerOneImage,
      playerTwoImage,
    } = this.state;

    return (
      <div>
        <div className="row">
          {!playerOneReady ? (
            <PlayerInput
              id="playerOne"
              label="Player One"
              name={playerOneName}
              onSubmit={this.handleSubmit}
              onUpdate={this.handleChange}
            />
          ) : (
            <PlayerPreview
              id="playerOne"
              avatar={playerOneImage}
              username={playerOneName}
              onReset={this.handleReset}
            />
          )}
          {!playerTwoReady ? (
            <PlayerInput
              id="playerTwo"
              label="Player Two"
              name={playerTwoName}
              onSubmit={this.handleSubmit}
              onUpdate={this.handleChange}
            />
          ) : (
            <PlayerPreview
              id="playerTwo"
              avatar={playerTwoImage}
              username={playerTwoName}
              onReset={this.handleReset}
            />
          )}
        </div>
        {playerOneReady &&
          playerTwoReady && (
            <Link
              className="button"
              to={{
                pathname: `${ match.url }/results`,
                search: `?playerOneName=${ playerOneName }&playerTwoName=${ playerTwoName }`,
              }}
            >
              Battle
            </Link>
          )}
      </div>
    );
  }
}

Battle.propTypes = {
  match: object.isRequired,
};
