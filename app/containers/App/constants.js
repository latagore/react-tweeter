/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_TWEETS = 'boilerplate/App/LOAD_TWEETS';
export const LOAD_TWEETS_SUCCESS = 'boilerplate/App/LOAD_TWEETS_SUCCESS';
export const LOAD_TWEETS_ERROR = 'boilerplate/App/LOAD_TWEETS_ERROR';
export const CREATE_TWEET = 'boilerplate/App/CREATE_TWEET';
export const CREATE_TWEET_SUCCESS = 'boilerplate/App/CREATE_TWEET_SUCCESS';
export const CREATE_TWEET_ERROR = 'boilerplate/App/CREATE_TWEET_ERROR';
export const DEFAULT_LOCALE = 'en';
