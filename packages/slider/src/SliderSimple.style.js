const btnNav = {
  position: 'absolute',
  top: 'calc(50% - 27px)',
  cursor: 'pointer',
  color: "#f5f5f5",
  fontSize: 28,
  display: 'block',
  lineHeight: '54px',
  width: 54,
  height: 54,
  border: '2px solid #f5f5f5',
  background: 'transparent',
  '&:disabled': { // https://www.w3schools.com/cssref/sel_disabled.asp
    cursor: 'auto',
    opacity: 0.2,
    transition: 'opacity 400ms linear 400ms',
  }
}

export default (theme) => ({
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
    width: 12,
    height: 12,
    display: 'block',
    backgroundColor: 'transparent',
    borderRadius: '50%',
    border: '1px solid #ccc',
    cursor: 'pointer',
    margin: 8,
  },
  btnBadgeActive: {
    composes: '$btnBadge',
    cursor: 'auto',
    backgroundColor: '#999',
    transition: 'backgroundColor 200ms linear 200ms',
  },
  btnBadgeDisabled: {
    composes: '$btnBadge',
    cursor: 'auto',
    opacity: 0.2,
    transition: 'opacity 200ms linear 200ms',
  },
  // btnBadgeActiveDisabled: {
  //   composes: ['$btnBadgeActive', '$btnBadgeDisabled']
  // },
  // '&:before': {
  //   content: "''",
  // }
});
