import React from 'react';
import './App.css';
import UserRouter from './Router/Router'

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <div className="App" >
        <UserRouter/>
      </div>
    );
  }
}

export default App;

