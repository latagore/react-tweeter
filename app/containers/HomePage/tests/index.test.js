/**
 * Test the HomePage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import ReposList from 'components/ReposList';
import Button from 'components/Button';
import Form from '../Form';
import TextArea from '../TextArea';
import { HomePage, mapDispatchToProps } from '../index';
import { changeTextAreaText, createTweet } from '../actions';
import { loadRepos } from '../../App/actions';

describe('<HomePage />', () => {
  it('should render the new tweet form and tweets', () => {
    const renderedComponent = shallow(
      <HomePage loading error={false} tweets={[]} />
    );

    expect(renderedComponent.find(Form).length).toBe(1);
    expect(renderedComponent.find(Button).length).toBe(1);
    expect(renderedComponent.find(TextArea).length).toBe(1);
    expect(renderedComponent.contains(<ReposList loading error={false} repos={[]} />)).toEqual(true);
  });

  it('should call onSubmitForm when the button is clicked', () => {
    const submitSpy = jest.fn();
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <HomePage
          onSubmitForm={submitSpy}
          loadTweets={() => {}}
        />
      </IntlProvider>
    );

    renderedComponent.find(Button).simulate('click');
    expect(submitSpy).toHaveBeenCalled();
    // check state
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeTextArea', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeTextArea).toBeDefined();
      });

      it('should dispatch changeTextAreaText when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const text = 'some text for the text area';
        result.onChangeTextArea({ target: { value: text } });
        expect(dispatch).toHaveBeenCalledWith(changeTextAreaText(text));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch createTweet when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(createTweet());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
