import React from 'react';
import { shallow } from 'enzyme';

import Handle from '../Handle';

describe('<Handle />', () => {
  it('have the user handle as text content, prefixed with @', () => {
    const renderedComponent = shallow(<Handle handle={'user_handle'} />);
    expect(renderedComponent.contains('@user_handle')).toBe(true);
  });
});
