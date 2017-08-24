import React from 'react';
import { mount } from 'enzyme';

import Tweet from 'components/Tweet';
import TweetListItem from '../index';

describe('<TweetListItem />', () => {
  it('should have a className', () => {
    const renderedComponent = mount(<TweetListItem className="test" />);
    expect(renderedComponent.find('li').prop('className')).toBeDefined();
  });

  it('should render a tweet', () => {
    const content = {};
    const renderedComponent = mount(
      <TweetListItem item={content} />
    );
    expect(renderedComponent.find(Tweet).length).toEqual(1);
  });
});
