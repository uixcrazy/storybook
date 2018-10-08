const styles = {
  listPhotos: {
    columnGap: '1.5em',
    '-webkit-column-gap': '1.5em', // Chrome, Safari, Opera
    '-moz-column-gap': '1.5em',
    '-webkit-transition': 'all .5s ease-in-out',
    transition: 'all .5s ease-in-out',
    marginBottom: '2rem',
  },
  item: {
    display: 'inline-block',
    marginBottom: '1.5rem',
  },
  itemImage: {
    '-webkit-transition': 'all .5s ease-in-out',
    transition: 'all .5s ease-in-out',
    maxWidth: '100%',
    verticalAlign: 'bottom',
  },
  caption: {
    color: '#555',
    paddingTop: 8,
    fontSize: 18,
  },
  nodata: {
    color: '#999',
    fontSize: '1.5rem',
    fontStyle: 'italic',
    fontWeight: 300,
  },
  // iphone: 375px x 667px
  // plus: 414px x 736px
  '@media only screen and (min-width: 1024px)': {
    listPhotos: {
      columnCount: 4,
    },
  },
  '@media only screen and (max-width: 1023px) and (min-width: 768px)': {
    listPhotos: {
      columnCount: 3,
    },
  },
  '@media only screen and (max-width: 767px) and (min-width: 540px)': {
    listPhotos: {
      columnCount: 2,
    },
  },

  '@media only screen and (max-width: 539px)': {
    item: {
      display: 'block',
    },
    itemImage: { // not good
      width: '100%',
    },
  },
};
export default styles;
