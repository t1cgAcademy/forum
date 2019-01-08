import {
  TEST_ACTION,
  HANDLE_POST_CHANGE,
  HANDLE_POST_CLICK,
  CLOSE_POST,
  CLEAR_POST
} from './types';

export const testAction = () => dispatch => {
  dispatch({ type: TEST_ACTION });
};

export const handlePostChange = e => dispatch => {
  dispatch({
    type: HANDLE_POST_CHANGE,
    payload: { [e.target.name]: e.target.value }
  });
};

export const handlePostClick = index => dispatch => {
  dispatch({
    type: HANDLE_POST_CLICK,
    payload: index
  });
  dispatch({ type: CLOSE_POST });
};

export const clearPost = () => dispatch => {
  dispatch({ type: CLEAR_POST });
  dispatch({ type: CLOSE_POST });
};
