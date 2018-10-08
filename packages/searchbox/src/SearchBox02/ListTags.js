import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './ListTags.style';

const ListTags = ({ classes, tags, handleClick }) => (
  <ul className={classes.tags}>
    {
      tags.map((tag, index) => <li key={index} className={classes.item}
        onClick={() => {
          handleClick(tag);
        }}>
        {tag.title}
      </li>)
    }
  </ul>
);

ListTags.propTypes = {
  classes: PropTypes.object,
  tags: PropTypes.arrayOf(PropTypes.object),
  handleClick: PropTypes.func,
};

export default injectSheet(styles)(ListTags);
