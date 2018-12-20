import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { withStyles } from '../../../utils/withStyles';
import { isNotBoolean } from '../../../utils/utilities';
import defaultStyles from './ex02.eg.style';
// import attachRawCss from '../../../utils/attachRawCss';
// import styleFirst from '!!raw-loader!./ex02.eg.css';// eslint-disable-line

const Expansion = ({ classes, onToggle }) => (
  <div className={classes.expansion}>
    <h1>Expansion</h1>
    <button className={classes.btnClose}
      onClick={() => {
        onToggle(false);
      }}
    >close</button>
    <div>
      <img style={{ width: '100%' }} src="https://images.unsplash.com/photo-1545064123-a721e0a5a03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="ngoc" />
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>Sapien faucibus et molestie ac feugiat. Ipsum dolor sit amet consectetur adipiscing elit ut. Sed arcu non odio euismod lacinia at quis risus. Condimentum lacinia quis vel eros donec ac. Ullamcorper sit amet risus nullam eget. Volutpat sed cras ornare arcu dui vivamus. Est ante in nibh mauris cursus mattis molestie a iaculis. In aliquam sem fringilla ut morbi tincidunt augue interdum. Tortor consequat id porta nibh venenatis cras sed felis eget. Sociis natoque penatibus et magnis dis. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Molestie at elementum eu facilisis sed. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Aliquam faucibus purus in massa tempor nec feugiat nisl. Pellentesque habitant morbi tristique senectus. Aenean euismod elementum nisi quis eleifend quam. Nulla porttitor massa id neque aliquam vestibulum morbi blandit.</p>
      <p>A scelerisque purus semper eget duis at. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Amet purus gravida quis blandit turpis cursus in. Netus et malesuada fames ac turpis egestas. In tellus integer feugiat scelerisque. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Sed egestas egestas fringilla phasellus. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Donec ultrices tincidunt arcu non sodales neque sodales. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Sed viverra tellus in hac habitasse platea dictumst vestibulum.</p>
      <p>Id venenatis a condimentum vitae sapien. Neque sodales ut etiam sit amet nisl purus in. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Venenatis a condimentum vitae sapien pellentesque. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Ipsum suspendisse ultrices gravida dictum fusce ut. Semper risus in hendrerit gravida rutrum quisque non tellus. Elementum integer enim neque volutpat ac tincidunt vitae. Imperdiet dui accumsan sit amet nulla. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Amet dictum sit amet justo. Felis eget nunc lobortis mattis aliquam faucibus purus.</p>
      <p>Ultricies leo integer malesuada nunc vel risus. Nec dui nunc mattis enim ut tellus elementum. Adipiscing bibendum est ultricies integer quis. Eget nullam non nisi est sit. In cursus turpis massa tincidunt dui ut ornare. Risus sed vulputate odio ut enim blandit volutpat. Amet mauris commodo quis imperdiet massa. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Diam maecenas ultricies mi eget mauris pharetra. Eu nisl nunc mi ipsum faucibus vitae aliquet. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Nullam non nisi est sit amet facilisis magna etiam. Semper viverra nam libero justo laoreet sit amet. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Id cursus metus aliquam eleifend mi in nulla.</p>
      <p>Tempus quam pellentesque nec nam aliquam sem et. Senectus et netus et malesuada. Mattis nunc sed blandit libero volutpat sed cras ornare. Imperdiet proin fermentum leo vel orci porta. Egestas maecenas pharetra convallis posuere morbi leo. At consectetur lorem donec massa sapien faucibus et molestie ac. Facilisis sed odio morbi quis commodo odio aenean. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Purus in massa tempor nec feugiat.</p>
    </div>
  </div>
);

const Collapse = ({ classes, onToggle }) => (
  <div
    className={classes.collapse}
    onClick={() => {
      onToggle(true);
    }}
  >
    ⤌
  </div>
);

class Example extends Component {
  static propTypes = {
    classes: PropTypes.object,
  }

  // static defaultProps = {}

  state = {
    expand: true,
  }

  onToggle = (expand) => {
    if (isNotBoolean(expand)) {
      this.setState({ expand });
    } else {
      this.setState(state => ({ // , props
        expand: !state.expand,
      }));
    }
  }

  render() {
    const { classes } = this.props;
    const { expand } = this.state;
    return (
      <div className={classes.wrapper}>
        <CSSTransition
          key="animeExpansion"
          in={expand === true}
          timeout={800}
          // classNames="anime"
          classNames={{
            appear: classes.animeAppear,
            enter: classes.animeEnter,
            enterActive: classes.animeEnterActive,
            exit: classes.animeExit,
            exitActive: classes.animeExitActive,
            exitDone: classes.animeExitDone,
          }}
          unmountOnExit
        >
          <Expansion
            classes={classes}
            onToggle={this.onToggle}/>
        </CSSTransition>
        <CSSTransition
          key="animeCollapse"
          in={expand === false}
          timeout={500}
          // classNames="animeCollapse"
          classNames={{
            enter: classes.animeCollapseEnter,
            enterActive: classes.animeCollapseEnterActive,
          }}
          unmountOnExit
        >
          <Collapse
            classes={classes}
            onToggle={this.onToggle}/>
        </CSSTransition>
      </div>
    );
  }
}

export default withStyles(defaultStyles, Example);
