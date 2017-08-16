/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_TEXT_AREA_TEXT,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  textAreaText: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEXT_AREA_TEXT:
      return state
        .set('textAreaText', action.text);
    default:
      return state;
  }
}

export default homeReducer;
