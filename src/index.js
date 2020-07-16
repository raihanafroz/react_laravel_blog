import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/reducers';
import sagas from './redux/sagas';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [sagaMiddleware, routeMiddleware];
const store = createStore(rootReducer(history), composeWithDevTools(compose(applyMiddleware(...middlewares))));
sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routes history={history} />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

export default history;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
