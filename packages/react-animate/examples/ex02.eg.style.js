const styles = {
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
    },
    body: {
      background: '#F7F7F7 linear-gradient(to bottom right,#EEEEEE,#FFFFFF)',
    },
  },
  wrapper: {
    top: 0,
    right: 0,
    bottom: 0,
    position: 'fixed',
    // height: `calc(100vh - ${headerHeight}px)`,
    zIndex: 999,
    height: '100%',
    background: '#ccc',

    // background: '#fff',
    // '& > div': {
    //   height: '100%',
    // },
  },

  btnClose: {
    background: '#eee',
    position: 'absolute',
    cursor: 'pointer',
    padding: '5px 10px',
    top: 20,
    right: 20,
    border: '0',
    fontSize: 20,
    '&:focus': {
      outline: 0,
    },
  },
  expansion: {
    width: 370,
    // position: 'relative',  can't use
    height: '100%',
    background: 'cyan',
    overflowY: 'auto',
  },
  collapse: {
    width: 30,
    background: '#ccc',
    // position: 'relative',
    height: '100%',

    display: 'flex',
    alignItems: 'center',
  },

  // animation
  animeAppear: {
    opacity: 0,
    marginRight: -370,
  },
  animeEnter: {
    opacity: 0.01,
    marginRight: -370,
  },
  animeEnterActive: {
    opacity: 1,
    marginRight: 0,
    transition: 'opacity 500ms linear, margin-right 800ms ease-out',
  },
  animeExit: {
    opacity: 1,
    marginRight: 0,
  },
  animeExitActive: {
    opacity: 0.01,
    marginRight: -370,
    transition: 'opacity 800ms linear, margin-right 800ms ease-out',
  },
  animeExitDone: {
    opacity: 0,
    marginRight: -370,
  },
  animeCollapseEnter: {
    opacity: 0,
  },
  animeCollapseEnterActive: {
    opacity: 1,
    transition: 'opacity 500ms ease-in',
  },
};

export default styles;
