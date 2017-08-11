import React from 'react';
import { shallow } from 'enzyme';

import AvatarImg from '../AvatarImg';

describe('<AvatarImg />', () => {
  it('should render an <img> tag', () => {
    const renderedComponent = shallow(<AvatarImg />);
    expect(renderedComponent.type()).toEqual('img');
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<AvatarImg id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<AvatarImg attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
