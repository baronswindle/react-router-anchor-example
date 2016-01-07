// ComponentB.jsx

import React from 'react';
import { IndexLink } from 'react-router';

class ComponentB extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>You're in Component B</h1>
        <div>
          <IndexLink to="/">Go to Component A (top of page).</IndexLink>
        </div>
        <div>
          <IndexLink to={{ pathname: '/', hash: '#component-c' }}>Go to Component A and scroll to Component C.</IndexLink>
        </div>
      </div>
    );
  }
}

export default ComponentB;
