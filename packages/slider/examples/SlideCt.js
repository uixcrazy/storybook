import React from 'react';
import injectSheet from '../../../utils/injectSheetWithTheme';

const styles = () => ({
  slideCt: {
    position: 'relative',
    textAlign: 'center',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    backgroundColor: '#fff',
    height: '100%',
    flex: 1,
    overflow: 'hidden',
  },
  figureImage: {
    display: 'inline-block',
    maxWidth: '100%',
    maxHeight: '100%',
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
);

export default injectSheet(styles, SlideCt);
