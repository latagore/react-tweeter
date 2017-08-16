/*
 * AppReducer
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
  LOAD_TWEETS_SUCCESS,
  LOAD_TWEETS,
  LOAD_TWEETS_ERROR,
  CREATE_TWEET,
  CREATE_TWEET_SUCCESS,
  CREATE_TWEET_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  tweets: [],
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TWEETS:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_TWEETS_SUCCESS:
      return state
        .set('tweets', action.tweets)
        .set('loading', false);
    case LOAD_TWEETS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case CREATE_TWEET:
      return state
        .set('loading', true)
        .set('error', false);
    case CREATE_TWEET_SUCCESS:
      let newState = state;
      if (action.tweets) {
        newState = newState
          .set('tweets', action.tweets);
      }
      return newState
        .set('loading', false);
    case CREATE_TWEET_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
