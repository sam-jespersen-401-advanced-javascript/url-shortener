import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from './Header';
import LoginUser from '../containers/LoginUser';
import SignupUser from '../containers/SignupUser';

const App = () => {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login" component={LoginUser} />
        <Route path="/signup" component={SignupUser} />
      </Switch>
    </Router>
  );

};

export default App;
