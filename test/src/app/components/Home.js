import React, { Component, PropTypes } from 'react';
import TopBar from './TopBar';

class Home extends Component {
  render() {
    const { close, state } = this.props;
    return (
      <div>
        <h1>Test</h1>
        <p>@Change to add your content here!</p>
        <p><small>Current URL: <span id="url" dangerouslySetInnerHTML={{__html: state.extension.url}}></span></small></p> 
      </div>
    );
  }
}

export default Home;
