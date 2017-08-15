import React from 'react';
import styled from 'styled-components';
import NormalTextArea from 'components/TextArea';

const StyledTextArea = styled(NormalTextArea)`
  width: 100%;
`;

const TextArea = (props) => {
  return <StyledTextArea rows="3" {...props} />
}

export default TextArea;
