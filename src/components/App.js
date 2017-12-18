import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Popular from './Popular';

// Parent: Entry - index.js, Children: Popular
const App = () => (
  <BrowserRouter>
    <div className="container">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/popular" component={Popular} />
        <Route exact path="/battle" component={Battle} />
        <Route render={() => <p>Not Found</p>} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
