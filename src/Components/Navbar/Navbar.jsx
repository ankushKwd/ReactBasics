import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  render () {
    return (
      <div className="Navbar sticky">
        <Router>
          <Link to="/">Home</Link>
          <Link to="/about">Link1</Link>
          <Link to="/users">Link2</Link>
          <Link to="/contact">Link3</Link>
        </Router>
      </div>
    );
  }
}

export default Navbar;
