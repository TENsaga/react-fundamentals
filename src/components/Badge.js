import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Badge extends Component {
  render() {
    let { img, name, username } = this.props.user;
    return (
      <div>
        <img
          src={img}
          alt='Avatar'
          style={{width: 100, height: 100}}
        />
        <h1>Name: {name}</h1>
        <h3>Username: {username}</h3>
      </div>
    );
  }
}

Badge.propTypes = {
  user: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  })
}

export default Badge;