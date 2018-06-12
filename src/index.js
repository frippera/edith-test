import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Bakery from './pages/Bakery';
import Catering from './pages/Catering';
import Favorites from './pages/Favorites';
import Lunch from './pages/Lunch';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/catering" component={Catering} />
        <Route exact path="/bakery" component={Bakery} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/lunch" component={Lunch} />
      </Switch>
    </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
