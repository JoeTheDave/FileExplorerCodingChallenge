import React from 'react';
import PropTypes from 'prop-types';
import '../assets/SpriteIcon.css';
import sprite from '../assets/icon-sprite.png';

const SpriteIcon = ({ icon }) => (
  <img src={sprite} className={`sprite ${icon}`} alt={icon} />
);

SpriteIcon.propTypes = {
  icon: PropTypes.oneOf([
    'folder',
    'private-folder',
    'file',
    'close',
    'expand-dark',
    'collapse-dark',
    'expand-light',
    'collapse-light',
    'blank',
  ]).isRequired,
};

export default SpriteIcon;
