import React, { Component }from 'react';
import LoginForm  from '../LoginForm/LoginForm';
import IssuesContainer from '../IssuesContainer/IssuesContainer'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state= {
      isProject:true,
      isLoggedIn:false,

    }
  }


  render () {
    const { isProject } = this.state;
    if(isProject) {
      return (
        <div className="App">
          <IssuesContainer />
        </div>
      )

    }
    return (
      <div className="App">
      <LoginForm />
    </div>
  );
  }
}

export default App;
