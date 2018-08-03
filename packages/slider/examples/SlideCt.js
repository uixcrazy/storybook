import React from 'react';
import injectSheet from 'react-jss';

const styles = (theme) => ({
  slideCt: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: '100%',
    flex: 1,
    overflow: 'hidden',
  },
  figureImage: {
    display: 'block',
    width: '100%',
  },
  figcaption: {
    color: '#fff',
    position: 'absolute',
    bottom: 10,
    padding: 10,
    fontWeight: 300,
    fontSize: 26,
    letterSpacing: '1px',
  },
});

const SlideCt = ({ classes, item, keya }) => (
  <figure className={classes.slideCt}>
    <img className={classes.figureImage} src={item.photoUrl} alt={item.id} />
    <figcaption className={classes.figcaption}>{keya} {item.title}</figcaption>
  </figure>
)

export default injectSheet(styles)(SlideCt);