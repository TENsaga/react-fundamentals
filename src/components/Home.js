import React from 'react';
import { Link } from 'react-router-dom';

// Parent: App, Children: Link to /battle
export default function Home() {
  return (
    <div className="home-container">
      <h1>Github Battle: Battle your friends...and stuff.</h1>
      <Link className="button" to="/battle">
        Battle
      </Link>
    </div>
  );
}
