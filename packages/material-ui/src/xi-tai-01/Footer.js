import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';

const Footer = ({ classes, children }) => {
  return (
    <div>
       Header
    </div>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default Footer;
