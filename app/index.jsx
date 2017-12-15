var React = require('react');
var ReactDOM = require('react-dom');
require('./style.sass');

// state - not required, can be stateless
// lifecycle events - not required
// UI - almost always needs UI

class App extends React.Component {
  render() {  // the only required function in a React Class component
    return (
      <div>
        Hello World
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)