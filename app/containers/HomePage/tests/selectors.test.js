import { fromJS } from 'immutable';

import {
  selectHome,
  makeSelectTextAreaText,
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = fromJS({
      textArea: {},
    });
    const mockedState = fromJS({
      home: homeState,
    });
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectTextAreaText', () => {
  const textAreaTextSelector = makeSelectTextAreaText();
  it('should select the textAreaText field', () => {
    const textAreaText = 'some text';
    const mockedState = fromJS({
      home: {
        textAreaText,
      },
    });
    expect(textAreaTextSelector(mockedState)).toEqual(textAreaText);
  });
});
