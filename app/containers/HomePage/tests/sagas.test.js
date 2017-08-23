/**
 * Tests for HomePage sagas
 */

import { cancel, take, put, takeLatest } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/lib/utils';

import { LOCATION_CHANGE } from 'react-router-redux';

import { LOAD_REPOS } from 'containers/App/constants';
import { tweetsLoaded, tweetsLoadingError } from 'containers/App/actions';

import { getTweets, githubData } from '../sagas';

/* eslint-disable redux-saga/yield-effects */
describe('getTweets Saga', () => {
  let getTweetsGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getTweetsGenerator = getTweets();

    // const selectDescriptor = getTweetsGenerator.next().value;
    // expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getTweetsGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the tweetsLoaded action if it requests the data successfully', () => {
    const response = [{
      name: 'First tweet',
    }, {
      name: 'Second tweet',
    }];
    const putDescriptor = getTweetsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(tweetsLoaded(response)));
  });

  it('should call the tweetsLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getTweetsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(tweetsLoadingError(response)));
  });
});
//
// describe('githubDataSaga Saga', () => {
//   const githubDataSaga = githubData();
//   const mockedTask = createMockTask();
//
//   it('should start task to watch for LOAD_REPOS action', () => {
//     const takeLatestDescriptor = githubDataSaga.next().value;
//     expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_REPOS, getTweets));
//   });
//
//   it('should yield until LOCATION_CHANGE action', () => {
//     const takeDescriptor = githubDataSaga.next(mockedTask).value;
//     expect(takeDescriptor).toEqual(take(LOCATION_CHANGE));
//   });
//
//   it('should cancel the forked task when LOCATION_CHANGE happens', () => {
//     const cancelDescriptor = githubDataSaga.next().value;
//     expect(cancelDescriptor).toEqual(cancel(mockedTask));
//   });
// });
