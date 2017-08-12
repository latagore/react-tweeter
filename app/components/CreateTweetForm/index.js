import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button from '../Button';
import Form from './Form';
import TextArea from './TextArea';
import messages from './messages'

class NewTweetForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Form>
        <TextArea />
        <Button>
          <FormattedMessage {...messages.createTweet} />
        </Button>
      </Form>
    );
  }
}

export default NewTweetForm;
