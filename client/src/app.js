import React from 'react';
import ReactDOM from 'react-dom';
import MarkdocsApp from './components/MarkdocsApp';
import OAuth from './components/OAuth';
import { Router, browserHistory } from 'react-router-dom';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MarkdocsApp} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('app'));
