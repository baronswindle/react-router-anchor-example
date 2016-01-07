// App.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ComponentA} />
      <Route path="b" component={ComponentB}/>
    </Route>
  </Router>,
  document.querySelector('#react-app')
);
