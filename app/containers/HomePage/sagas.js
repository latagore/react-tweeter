/**
 * Gets tweets from the server
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_TWEETS } from 'containers/App/constants';
import { tweetsLoaded, tweetsLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getTweets() {
  // fake data to test the app
  // const fakeTweets = [
  //   {
  //     user: {
  //       handle: 'Dog',
  //       avatarImageURL: 'http://i.imgur.com/Iek1A.png',
  //     },
  //     content: 'Hello world!',
  //   },
  // ];
  const requestURL = `http://localhost:3000/api/feed`;

  try {
    const tweets = yield call(request, requestURL);
    yield put(tweetsLoaded(tweets));
  } catch (err) {
    yield put(tweetsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* tweetData() {
  // Watches for LOAD_TWEETS actions and calls getTweets when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_TWEETS, getTweets);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  tweetData,
];
