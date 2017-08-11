import React from 'react';

import TweetHeader from './TweetHeader';
import TweetBody from './TweetBody';
import TweetFooter from './TweetFooter';
import Avatar from './Avatar';
import Handle from './Handle';
import ShareButton from './ShareButton';
import LikeButton from './LikeButton';
import Wrapper from './Wrapper';
// import messages from './messages';

function Tweet(props) {
  const user = props.user || {};
  return (
    <Wrapper>
      <TweetHeader>
        <Avatar src={user.avatarImageURL} handle={`${user.handle} avatar`} />
        <Handle handle={user.handle} />
      </TweetHeader>
      <TweetBody>{props.content}</TweetBody>
      <TweetFooter>
        <ShareButton onClick={props.onShare} />
        <LikeButton onClick={props.onLike} />
      </TweetFooter>
    </Wrapper>
  );
}
Tweet.propTypes = {
  user: React.PropTypes.shape({
    avatarImageURL: React.PropTypes.string,
    handle: React.PropTypes.string,
  }),
  content: React.PropTypes.string,
  onShare: React.PropTypes.func,
  onLike: React.PropTypes.func,
};


export default Tweet;
