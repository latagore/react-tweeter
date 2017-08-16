import { fromJS } from 'immutable';

import appReducer from '../reducer';
import {
  loadTweets,
  tweetsLoaded,
  tweetsLoadingError,
  createTweet,
  tweetCreated,
  tweetCreatingError,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      tweets: fromJS([]),
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadTweets action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('tweets', fromJS([]));

    expect(appReducer(state, loadTweets())).toEqual(expectedResult);
  });

  it('should handle the tweetsLoaded action correctly', () => {
    const fixture = [{
      user: 'some user',
      content: 'some tweet text',
    }];
    const expectedResult = state
      .set('tweets', fixture)
      .set('loading', false)
      .set('error', false)

    expect(appReducer(state, tweetsLoaded(fixture))).toEqual(expectedResult);
  });

  it('should handle the tweetsLoadingError action correctly', () => {
    const fixture = {
      msg: 'Some error',
    };
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(appReducer(state, tweetsLoadingError(fixture))).toEqual(expectedResult);
  });

  it('should handle the createTweet action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('tweets', fromJS([]));

    expect(appReducer(state, createTweet())).toEqual(expectedResult);
  });

  it('should handle the tweetCreated action correctly', () => {
    const tweets = [{
      user: 'some user',
      content: 'some tweet text',
    }];
    const expectedResult = state
      .set('loading', false)
      .set('error', false)
      .set('tweets', tweets);

    expect(appReducer(state, tweetCreated(tweets))).toEqual(expectedResult);
  });

  it('should not change tweets when handling createTweets', () => {
    const fixture = [{
      user: 'some user',
      content: 'some tweet text',
    }];

    state = fromJS({
      loading: false,
      error: false,
      tweets: fromJS(fixture),
    });
    const expectedResult = fromJS({
      loading: true,
      error: false,
      tweets: fromJS(fixture),
    });

    expect(appReducer(state, createTweet())).toEqual(expectedResult);
  });
  it('should not change tweets when handling loadTweets');
});
