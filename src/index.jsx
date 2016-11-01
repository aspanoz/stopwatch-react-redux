import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';

import StopwatchList from './components/StopwatchList';
import StopwatchInfo from './components/StopwatchInfo';
import configureStore from './store/configure-store';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={StopwatchList}/>
      <Route path="/stopwatch/:stopwatchID" component={StopwatchInfo}/>
    </Router>
  </Provider>, document.getElementById('root')
);
