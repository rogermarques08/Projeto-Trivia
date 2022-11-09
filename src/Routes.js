import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Feedback from './pages/Feedback';
import Game from './pages/Game';
import Ranking from './pages/Ranking';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/game" component={ Game } />
          <Route exact path="/feedback" component={ Feedback } />
          <Route path="/ranking" component={ Ranking } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}
