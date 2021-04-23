import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';

import {
  routerList
} from './router'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {
          routerList.map(({path, component}, idx) => (
            <Route
              path={path}
              component={component}
              exact={ Boolean(idx === 0) }
              key={idx} />
          ))
        }
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);