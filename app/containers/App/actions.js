/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_TWEETS,
  LOAD_TWEETS_SUCCESS,
  LOAD_TWEETS_ERROR,
  CREATE_TWEET,
  CREATE_TWEET_SUCCESS,
  CREATE_TWEET_ERROR
} from './constants';

/**
 * Load the tweets, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_TWEETS
 */
export function createTweet() {
  return {
    type: CREATE_TWEET,
  };
}

/**
 * Dispatched when the tweet is created and the new tweets are loaded
 *
 * @param  {array} tweets The tweet data
 *
 * @return {object}      An action object with a type of CREATE_TWEET_SUCCESS passing the tweets
 */
export function tweetCreated(tweets) {
  return {
    type: CREATE_TWEET_SUCCESS,
    tweets,
  };
}

/**
 * Dispatched when creating the tweet fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of CREATE_TWEET_ERROR passing the error
 */
export function tweetCreatingError(error) {
  return {
    type: CREATE_TWEET_ERROR,
    error,
  };
}


/**
 * Load the tweets, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_TWEETS
 */
export function loadTweets() {
  return {
    type: LOAD_TWEETS,
  };
}

/**
 * Dispatched when the tweets are loaded by the request saga
 *
 * @param  {array} tweets The tweet data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_TWEETS_SUCCESS passing the tweets
 */
export function tweetsLoaded(tweets) {
  return {
    type: LOAD_TWEETS_SUCCESS,
    tweets,
  };
}

/**
 * Dispatched when loading the tweets fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_TWEETS_ERROR passing the error
 */
export function tweetsLoadingError(error) {
  return {
    type: LOAD_TWEETS_ERROR,
    error,
  };
}
