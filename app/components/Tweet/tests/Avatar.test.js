import React from 'react';
import { shallow } from 'enzyme';

import Avatar from '../Avatar';
import AvatarImg from '../AvatarImg';

describe('<Avatar />', () => {
  it('should have an <AvatarImg />', () => {
    const renderedComponent = shallow(<Avatar />);
    expect(renderedComponent.find(AvatarImg).length).toBe(1);
  });
});
