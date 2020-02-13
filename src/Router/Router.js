import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import About from '../Components/About/About';
import Contacts from '../Components/Contact/Contact';
import Users from '../Components/Users/Users';

const UserRouter = props => {
  return (
    <Router>
      <Navbar />
      <div style={{marginTop: '50px'}}>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/users" component={Users}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
};

export default UserRouter;

function Home () {
  return <h2>Home</h2>;
}

/* 

function About () {
  return <h2>About</h2>;
}

function Users () {
  return <h2>Users</h2>;
}
 */
