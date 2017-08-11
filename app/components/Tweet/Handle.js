// FIXME move me to a new component
import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
`;

function Handle({ handle }) {
  return (
    <Wrapper>
      {`@${handle}`}
    </Wrapper>
  );
}

Handle.propTypes = {
  handle: React.PropTypes.string,
};

export default Handle;
