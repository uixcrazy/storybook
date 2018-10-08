const btnNav = {
  position: 'absolute',
  top: 'calc(50% - 12px)',
  cursor: 'pointer',
  color: '#000',
  fontSize: 12,
  display: 'block',
  lineHeight: '24px',
  width: 24,
  height: 24,
  border: '2px solid #000',
  background: 'transparent',
  zIndex: 10,
  '&:disabled': { // https://www.w3schools.com/cssref/sel_disabled.asp
    cursor: 'auto',
    opacity: 0.2,
    transition: 'opacity 300ms linear 300ms',
  },
};

// transition: property duration timing-function delay|initial|inherit;

const styles = {
  wrapper: { // include: slider, Next/Previous Btn...
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  slider: { // only have slide
    height: 'calc(100% - 30px)',
    overflow: 'hidden',
    position: 'relative',
  },
  slide: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    // left: '102%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPrev: {
    extend: btnNav,
    left: 10,
  },
  btnNext: {
    extend: btnNav,
    right: 10,
  },
  pagination: {
    // zIndex: 10,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    height: 30,
  },
  btnBadge: {
    width: 24,
    height: 24,
    display: 'block',
    backgroundColor: 'transparent',
    borderRadius: '50%',
    border: '1px solid cyan',
    cursor: 'pointer',
    margin: 8,
  },
  btnBadgeActive: {
    composes: '$btnBadge',
    cursor: 'auto',
    backgroundColor: 'cyan',
  },
  btnBadgeDisabled: {
    composes: '$btnBadge',
    cursor: 'auto',
    opacity: 0.2,
  },
};
export default styles;
