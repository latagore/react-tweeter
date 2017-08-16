import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import {
  changeTextAreaText,
} from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      textAreaText: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeTextAreaText action correctly', () => {
    const text = 'text';
    const expectedResult = state.set('textAreaText', text);

    expect(homeReducer(state, changeTextAreaText(text))).toEqual(expectedResult);
  });
});
