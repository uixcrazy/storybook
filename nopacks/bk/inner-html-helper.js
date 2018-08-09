import React from 'react';
import PropTypes from 'prop-types';
/**
 * Issue: ReRender error when using dangerouslySetInnerHTML
 * Refs:
 *   - https://github.com/developit/preact/issues/855
 *   - https://github.com/developit/preact/issues/844
 */

const InnerHTMLHelper = ({ tagName, html }) =>
  React.createElement(tagName,
    { dangerouslySetInnerHTML: { __html: html } });

InnerHTMLHelper.propTypes = {
  tagName: PropTypes.string,
  html: PropTypes.string,
};
export default InnerHTMLHelper;
