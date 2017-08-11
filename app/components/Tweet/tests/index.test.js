import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Tweet from '../index';
import Avatar from '../Avatar';
import Handle from '../Handle';
import ShareButton from '../ShareButton';
import LikeButton from '../LikeButton';

describe('<Tweet />', () => {
  it('should render the avatar, handle, content, share button and like button', () => {
    const tweetText = 'this is the best tweet';
    const renderedComponent = shallow(
      <Tweet content={tweetText} />
    );

    expect(renderedComponent.find(Avatar).length).toBe(1);
    expect(renderedComponent.find(Handle).length).toBe(1);
    expect(renderedComponent.contains(tweetText)).toBe(true);
    expect(renderedComponent.find(ShareButton).length).toBe(1);
    expect(renderedComponent.find(LikeButton).length).toBe(1);
  });

  it('should fire events when buttons are clicked', () => {
    const onShare = sinon.spy();
    const onLike = sinon.spy();
    const renderedComponent = shallow(
      <Tweet onShare={onShare} onLike={onLike} />
    );

    expect(onShare.callCount).toBe(0);
    renderedComponent.find(ShareButton).simulate('click');
    expect(onShare.callCount).toBe(1);

    expect(onLike.callCount).toBe(0);
    renderedComponent.find(LikeButton).simulate('click');
    expect(onLike.callCount).toBe(1);
  });
});
