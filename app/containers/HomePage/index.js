/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectLoading, makeSelectError, makeSelectTweets } from 'containers/App/selectors';
import { loadTweets } from 'containers/App/actions';
import Button from 'components/Button';
import TweetsList from 'components/TweetsList';
import Form from './Form';
import TextArea from './TextArea';
import messages from './messages';
import { makeSelectTextAreaText } from './selectors';
import { createTweet, changeTextAreaText } from './actions';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.loadTweets();
  }

  render() {
    return (
      <article>
        <Form>
          <TextArea
            onChange={(e) => this.props.onChangeTextArea(e.target.value)}
            value={this.props.textAreaText} />
          <Button onClick={this.props.onSubmitForm}>
            <FormattedMessage {...messages.createTweet} />
          </Button>
        </Form>
        <TweetsList loading={this.props.loading} error={this.props.error} tweets={this.props.tweets} />
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
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(createTweet());
      dispatch(changeTextAreaText(''));
    },
    onChangeTextArea: (evt) => {
      dispatch(changeTextAreaText(evt.target.value));
    }
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  tweets: makeSelectTweets(),
  textAreaText: makeSelectTextAreaText(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
