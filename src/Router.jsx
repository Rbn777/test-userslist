import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import UsersList from './components/UsersList';
import UserDetail from './components/UserDetail';

const ProjectRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={UsersList} />
        <Route path="/:idUser" component={UserDetail} />
      </Switch>
    </Router>
  );
};

export default ProjectRouter;