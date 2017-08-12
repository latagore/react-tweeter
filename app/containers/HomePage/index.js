/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectLoading, makeSelectError, makeSelectTweets } from 'containers/App/selectors';
import Tweet from 'components/Tweet';
import CreateTweetForm from 'components/CreateTweetForm'
import { loadTweets } from '../App/actions';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.loadTweets();
  }

  render() {
    const { tweets } = this.props;
    return (
      <article>
        <CreateTweetForm />
        {
          tweets && tweets.map(
            (tweet, key) => <Tweet key={key} {...tweet} />
          )
        }
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  tweets: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  loadTweets: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadTweets: () => {
      dispatch(loadTweets());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  tweets: makeSelectTweets(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
