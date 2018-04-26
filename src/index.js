import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import ReduxPromise from "redux-promise";
import { AppContainer } from 'react-hot-loader'

import App from './components/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
//const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const render = Component => {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <AppContainer>
        <App />
      </AppContainer>
    </Provider>,
    document.getElementById('container')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App) })
}


