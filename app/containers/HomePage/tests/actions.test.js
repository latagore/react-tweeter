import {
  CHANGE_TEXT_AREA_TEXT,
} from '../constants';

import {
  changeTextAreaText,
} from '../actions';

describe('Home Actions', () => {
  describe('changeUsername', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_TEXT_AREA_TEXT,
        text: fixture,
      };

      expect(changeTextAreaText(fixture)).toEqual(expectedResult);
    });
  });
});
