import { shallow, mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';

import Tweet from 'components/Tweet';
import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import TweetsList from '../index';

describe('<TweetsList />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(
      <TweetsList loading />
    );
    expect(renderedComponent.contains(<List component={LoadingIndicator} />)).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <TweetsList
          loading={false}
          error={{ message: 'Loading failed!' }}
        />
      </IntlProvider>
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong/);
  });

  it('should render the tweets if loading was successful', () => {
    const tweets = [{
      user: "some user",
      content: "some tweet text"
    }];
    const renderedComponent = shallow(
      <TweetsList
        tweets={tweets}
        error={false}
      />
    );

    expect(renderedComponent.contains(<List items={tweets} component={Tweet} />)).toEqual(true);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const renderedComponent = shallow(
      <TweetsList
        tweets={false}
        error={false}
        loading={false}
      />
    );

    expect(renderedComponent.html()).toEqual(null);
  });
});
