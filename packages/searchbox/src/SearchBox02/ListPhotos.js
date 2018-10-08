
import React from 'react';
import PropTypes from 'prop-types';
import ListTags from './ListTags';
import { withStyles } from '../../../../utils/withStyles';
import styles from './ListPhotos.style';

const ListPhotos = ({
  classes,
  isLoaded,
  listPhotos,
  handleClickTag,
}) => {
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <section className={classes.listPhotos}>
      { listPhotos && listPhotos.length > 0
        ? listPhotos.map(item => (
          <figure key={item.id} className={classes.item}>
            <img className={classes.itemImage} src={item.urls.small} alt={item.id} />
            {
              item.description
                ? <figcaption className={classes.caption}>{item.description}</figcaption>
                : ''
            }
            <ListTags
              tags={item.photo_tags}
              handleClick={handleClickTag}
            />
          </figure>
        ))
        : <p className={classes.nodata}>No Data</p>}
    </section>
  );
};

ListPhotos.propTypes = {
  classes: PropTypes.object,
  isLoaded: PropTypes.bool,
  listPhotos: PropTypes.array,
  handleClickTag: PropTypes.func,
};

export default withStyles(styles, ListPhotos);
