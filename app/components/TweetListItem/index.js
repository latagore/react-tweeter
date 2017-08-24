import React from 'react';

import Tweet from 'components/Tweet';
import Wrapper from './Wrapper';

function TweetListItem(props) {
  return (
    <Wrapper>
      <Tweet {...props}/>
    </Wrapper>
  );
}

TweetListItem.propTypes = {
  item: React.PropTypes.any,
};

export default TweetListItem;
