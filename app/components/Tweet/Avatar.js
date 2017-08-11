// FIXME move me to a new component
import React from 'react';

import AvatarImg from './AvatarImg';

function Avatar({ src, handle }) {
  return (
    // need translation for alt text
    <AvatarImg src={src} alt={`${handle} avatar`} />
  );
}

Avatar.propTypes = {
  src: React.PropTypes.string,
  handle: React.PropTypes.string,
};

export default Avatar;
