// ComponentA.jsx

import React from 'react';
import { Link } from 'react-router';

import ComponentC from './ComponentC';

function scrollToHash() {
  if (window.location.hash) {
    let target = document.querySelector(window.location.hash);
    if (target) target.scrollIntoView();
  }
}

class ComponentA extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', scrollToHash);
  }

  render() {
    return (
      <div style={styles.container}>
        <h1>This is Component A</h1>
        <div>
          <Link to="/b">Go to B</Link>
        </div>
        <div>
          <a href="#component-c">Go to Component C (on this page)</a>
        </div>
        <div style={styles.spacer} />
        <ComponentC />
        <div style={styles.spacer} />
      </div>
    );
  }
}

let styles = {
  container: {
    height: "100%",
    overflowY: "scroll"
  },
  spacer: {
    height: "100%",
    backgroundColor: "gray"
  }
};

export default ComponentA;
