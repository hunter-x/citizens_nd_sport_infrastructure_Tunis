import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import ReduxPromise from "redux-promise";
import { AppContainer } from 'react-hot-loader'
import { Route, Router, Redirect, Switch,BrowserRouter } from 'react-router-dom';

import App from './App';
import reducers from './reducers';
import history from './history';

const createStoreWithMiddleware = applyMiddleware()(createStore);
//const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const render = Component => {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <AppContainer>
      <Router history={history}>
        <App />
        </Router>
      </AppContainer>
    </Provider>,
    document.getElementById('container')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => { render(App) })
}


