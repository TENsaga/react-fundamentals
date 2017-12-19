import React from 'react';
import { string } from 'prop-types';

import LOADSVG from '../img/tail-spin.svg';

Loading.propTypes = {
  loadText: string,
};

Loading.defaultProps = {
  loadText: 'Loading...',
};

export default function Loading({ loadText }) {
  return (
    <div className="loader-container">
      <img className="loader" src={LOADSVG} alt="Loading" />
      <h2>{loadText}</h2>
    </div>
  );
}
