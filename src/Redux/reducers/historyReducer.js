import { SUBMIT_NEW_POST } from '../actions/types';
import classMap from '../../assets/data/data';

const initialState = {
  classMap: classMap,
  history: classMap['101'].history
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_NEW_POST:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
