/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectTextAreaText = () => createSelector(
  selectHome,
  (homeState) => homeState.get('textAreaText')
);

export {
  selectHome,
  makeSelectTextAreaText,
};
