import React from 'react';
import { string, func } from 'prop-types';

PlayerInput.propTypes = {
  id: string.isRequired,
  label: string.isRequired,
  name: string,
  onSubmit: func.isRequired,
  onUpdate: func.isRequired,
};

PlayerInput.defaultProps = {
  name: '',
};

export default function PlayerInput({
  label, id, name, onSubmit, onUpdate,
}) {
  return (
    <div>
      <form className="column" onSubmit={e => onSubmit(e, id)} >
        <label className="header" htmlFor="username">
          {label}
        </label>
        <input
          id="username"
          placeholder="github username"
          value={name}
          onChange={e => onUpdate(e, id)}
          autoComplete="off"
          type="text"
        />
        <button className="button" disabled={!name}>
          Submit
        </button>
      </form>
    </div>
  );
}
