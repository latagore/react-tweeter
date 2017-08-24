import React, { PropTypes } from 'react';

import List from 'components/List';
import TweetListItem from 'components/TweetListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import Tweet from 'components/Tweet';

function TweetsList({ loading, error, tweets }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (tweets !== false) {
    return <List items={tweets} component={TweetListItem} />;
  }

  return null;
}

TweetsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  tweets: PropTypes.any,
};

export default TweetsList;
