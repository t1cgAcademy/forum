import {
  OPEN_COMMENT,
  OPEN_POST,
  HEADER_DROPDOWN,
  HANDLE_CHANGE_CLASS,
  NEW_POST,
  CLOSE_POST
} from './types';

export const openComment = () => dispatch => {
  dispatch({
    type: OPEN_COMMENT
  });
};

export const openPost = () => dispatch => {
  dispatch({
    type: OPEN_POST
  });
};

export const closePost = () => dispatch => {
  dispatch({
    type: CLOSE_POST
  });
};

export const toggleHeader = () => dispatch => {
  dispatch({
    type: HEADER_DROPDOWN
  });
};

export const newPost = () => dispatch => {
  dispatch({
    type: NEW_POST
  });
};

export const handleChangeClass = value => dispatch => {
  dispatch({
    type: HANDLE_CHANGE_CLASS,
    payload: value
  });
};
