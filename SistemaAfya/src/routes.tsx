import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoutes from './private.routes';
import Dash from './views/pages/Dash';

import Home from './views/pages/Home';
import Login from './views/pages/Login';
import SignUp from './views/pages/SignUp';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/criar-conta" component={SignUp} />
        <PrivateRoutes path="dash" exact component={Dash} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;