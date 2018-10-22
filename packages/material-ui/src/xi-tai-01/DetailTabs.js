import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './DetailTabs.style';

// test
import AxiosDemo from '../../../API/src/AxiosDemo';

function TabContainer(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default"
          className={classes.rootAppBar}
        >
          <Tabs
            value={value}
            onChange={this.handleChange}
            // indicatorColor="primary" default is: "secondary"
            textColor="secondary"
            fullWidth
            scrollable
            scrollButtons="auto"
            classes={{
              root: classes.tabsRoot,
              indicator: classes.tabsIndicator,
            }}
          >
            <Tab
              // disableRipple
              classes={{
                root: classes.tabRoot,
                selected: classes.tabSelected,
                fullWidth: classes.tabFullWidth,
              }}
              label="Tab 1"
            />
            <Tab
              // disableRipple
              classes={{
                root: classes.tabRoot,
                selected: classes.tabSelected,
                fullWidth: classes.tabFullWidth,
              }}
              label="Tab 2"
            />
            <Tab
              // disableRipple
              classes={{
                root: classes.tabRoot,
                selected: classes.tabSelected,
                fullWidth: classes.tabFullWidth,
              }}
              label="Tab Three"
            />
            <Tab
              // disableRipple
              classes={{
                root: classes.tabRoot,
                selected: classes.tabSelected,
                fullWidth: classes.tabFullWidth,
              }}
              label="Tab Four"
            />
            <Tab
              // disableRipple
              classes={{
                root: classes.tabRoot,
                selected: classes.tabSelected,
                fullWidth: classes.tabFullWidth,
              }}
              label="Tab Five"
            />
            <Tab
              // disableRipple
              classes={{
                root: classes.tabRoot,
                selected: classes.tabSelected,
                fullWidth: classes.tabFullWidth,
              }}
              label="Tab Six"
            />
            <Tab
              // disableRipple
              classes={{
                root: classes.tabRoot,
                selected: classes.tabSelected,
                fullWidth: classes.tabFullWidth,
              }}
              label="Tab Seven"
            />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer><AxiosDemo /></TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
        {value === 4 && <TabContainer>Item Five</TabContainer>}
        {value === 5 && <TabContainer>Item Six</TabContainer>}
        {value === 6 && <TabContainer>Item Seven</TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};
// DetailTabs
export default withStyles(styles)(ScrollableTabsButtonAuto);
