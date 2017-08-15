import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import NormalTextArea from 'components/TextArea'
import TextArea from '../TextArea';

describe('<TextArea />', () => {
  it('should render a <textarea>', () => {
    const renderedComponent = mount(<TextArea />);
    expect(renderedComponent.find('textarea').length).toEqual(1);
  });

  it('should have a className attribute', () => {
    const renderedComponent = mount(<TextArea />);
    expect(renderedComponent.find('textarea').prop('className')).toBeDefined();
  });

  it('should produce bubble up change events', () => {
    const onChange = sinon.spy();
    const renderedComponent = mount(<TextArea onChange={onChange} />);
    const event = {
      target: {
        value: 'tweet'
      }
    };
    renderedComponent.find('textarea').simulate('change', event);
    expect(onChange.calledOnce).toBe(true);
    expect(onChange.calledWith(sinon.match(event))).toBe(true);
  })

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = mount(<TextArea id={id} />);
    expect(renderedComponent.find('textarea').prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = mount(<TextArea attribute={'test'} />);
    expect(renderedComponent.find('textarea').prop('attribute')).toBeUndefined();
  });
});
