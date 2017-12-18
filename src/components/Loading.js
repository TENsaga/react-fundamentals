import React from 'react';

import loading from '../img/tail-spin.svg';

export default function Loading() {
  return (
    <div className="loader-container">
      <img className="loader" src={loading} alt="Loading" />
      <h2>Loading...</h2>
    </div>
  );
}
