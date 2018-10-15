import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import withTheme from './withTheme';
/**
 * Header
 * main color
 * Fixed Bottom
 * Floating Bottom
 */

const styles = theme => ({
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    fontFamily: theme.typography.fontFamily,
  },
  header: {
    width: '100%',
    height: '3.5rem',
    position: 'fixed',
    zIndex: 10,
    backgroundColor: theme.palette.primary.main,
    // borderBottom: '1px solid rgba(48,51,58,.1)',
  },
  mainct: {
    flex: '1 0 0',
    marginTop: '3.5rem',
    overflowX: 'hidden',
  },
  mainctFixedBottom: {
    composes: '$mainct',
    marginBottom: '3.5rem',
  },
  floatingBottom: {
    width: '100%',
    position: 'fixed',
    bottom: '0',
    zIndex: '1000',
    background: 'transparent',
    overflow: 'hidden',
    display: 'flex',
    flexWrap: 'nowrap',
  },
  fixedBottom: {
    composes: '$floatingBottom',
    background: '#fff',
    borderTop: '1px solid #eee',
    boxShadow: '0 2px 5px rgba(0,0,0,.1)',
  },
});

const Layout = ({ classes, children }) => {
  const header = children.filter(c => (c.key === 'header'));
  const mainct = children.filter(c => (c.key === 'mainct'));
  const fixedBottom = children.filter(c => (c.key === 'fixedBottom'));
  const floatingBottom = children.filter(c => (c.key === 'floatingBottom'));
  return (
    <div className={classes.app}>
      { header.length > 0
        ? <header className={classes.header}>{header[0].component}</header>
        : null
      }
      { mainct.length > 0
        ? <section
          className={fixedBottom.length > 0 ? classes.mainctFixedBottom : classes.mainct}>
          {mainct[0].component}
        </section>
        : null
      }
      { fixedBottom.length > 0
        ? <div className={classes.fixedBottom}>{fixedBottom[0].component}</div>
        : null
      }
      { floatingBottom.length > 0
        ? <div className={classes.floatingBottom}>{floatingBottom[0].component}</div>
        : null
      }
    </div>
  );
};

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.array, // PropTypes.node,
};

export default withTheme(injectSheet(styles)(Layout));