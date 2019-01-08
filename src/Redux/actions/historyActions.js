import { SUBMIT_NEW_POST, CLOSE_POST } from './types';

export const submitNewPost = (postData, historyState) => dispatch => {
  postData.date = new Date();
  postData.name = 'Anon';
  postData.replies = [];
  historyState.unshift(postData);
  dispatch({ type: SUBMIT_NEW_POST, payload: historyState });
  dispatch({ type: CLOSE_POST });
};
