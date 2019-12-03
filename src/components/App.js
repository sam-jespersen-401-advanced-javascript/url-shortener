import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { getSessionId, getSessionLoading } from '../selectors/sessionSelector';
import { sessionVerify } from '../actions/sessionActions';
import LoginUser from '../containers/LoginUser';
import SignupUser from '../containers/SignupUser';

const PrivateRoute = ({ ...rest }) => {
  const sessionId = useSelector(getSessionId);
  const loading = useSelector(getSessionLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    if(!sessionId) dispatch(sessionVerify());
  }, []);

  if(loading) {
    return <h1>Loading...</h1>;
  }

  if(!loading && !sessionId) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
};





const App = () => {

  return (
    <Router>
      <Header />
      <Switch>
        <PrivateRoute exact path="/" component={Header} />
        <Route path="/login" component={SignupUser} />
      </Switch>
    </Router>
  );

};

export default App;
