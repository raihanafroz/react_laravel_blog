import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth/reducers';

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth
  })
