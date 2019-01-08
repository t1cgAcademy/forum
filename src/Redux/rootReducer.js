import { combineReducers } from 'redux';
import classes from './reducers/classesReducer';
import comment from './reducers/commentReducer';
import history from './reducers/historyReducer';
import post from './reducers/postReducer';
import view from './reducers/viewReducer';

const rootReducer = combineReducers({
  classes,
  comment,
  history,
  post,
  view
});

export default rootReducer;
