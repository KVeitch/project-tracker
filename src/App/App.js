import React, { Component } from 'react';
import IssuesContainer from '../IssuesContainer/IssuesContainer';
import Nav from '../Nav/Nav';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isProject: true,
      isLoggedIn: false,
    };
  }

  render = () => {
    const { isProject } = this.state;
    if (isProject) {
      return (
        <div className='App'>
          <Nav />
          <IssuesContainer />
        </div>
      );
    }
    return (
      <div className='App'>
        Bot
        <Nav />
        <IssuesContainer />
      </div>
    );
  };
}

export default App;
