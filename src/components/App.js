import React, { Component } from 'react';
import Badge from './Badge';
import Popular from './Popular';

const USER = {
  name: 'Aspen Swanson',
  username: 'aspen',
  img: 'https://c308991.ssl.cf1.rackcdn.com/SiteFiles/Artists/1888/b1995921-1c09-4894-8adf-dc909d44b477.jpg'
}

class App extends Component {
  render() {  // the only required function in a React Class component
    return (
      <div className='container'>
        <Popular />
      </div>
    )
  }
}

export default App;