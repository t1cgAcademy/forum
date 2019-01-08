import {
  TEST_ACTION,
  HANDLE_POST_CHANGE,
  HANDLE_POST_CLICK,
  CLEAR_POST
} from '../actions/types';

const initialState = {
  testAction: false,
  summary: '',
  content: '',
  index: 0,
  post: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TEST_ACTION:
      return { ...state, testAction: !state.testAction };
    case HANDLE_POST_CHANGE:
      return { ...state, ...action.payload };
    case HANDLE_POST_CLICK:
      return { ...state, index: action.payload };
    case CLEAR_POST:
      return { ...state, post: {} };
    default:
      return state;
  }
}
