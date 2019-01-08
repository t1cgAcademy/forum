import {
  OPEN_COMMENT,
  OPEN_POST,
  HEADER_DROPDOWN,
  HANDLE_CHANGE_CLASS,
  NEW_POST,
  CLOSE_POST
} from '../actions/types';
import classMap from '../../assets/data/data';

const initialState = {
  openComment: false,
  openPost: false,
  headerDropDown: false,
  classMap: classMap,
  history: classMap['101'].history
};

export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN_COMMENT:
      return { ...state, openComment: !state.openComment };
    case OPEN_POST:
      return { ...state, openPost: !state.openPost };
    case CLOSE_POST:
      return { ...state, openPost: false };
    case HEADER_DROPDOWN:
      return { ...state, headerDropDown: !state.headerDropDown };
    case HANDLE_CHANGE_CLASS:
      return {
        ...state,
        class: action.payload,
        history: classMap[action.payload].history
      };
    case NEW_POST:
      return { ...state, openPost: true, openComment: false };
    default:
      return state;
  }
}
