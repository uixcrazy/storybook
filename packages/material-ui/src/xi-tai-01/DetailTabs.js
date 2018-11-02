import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './DetailTabs.style';

// test
import AxiosDemo from '../../../API/src/AxiosDemo';
import GioiThieuSach from './test-ct/test01';
import ThongTinChiTiet from './test-ct/test02';

// const withTabContainer = WrappedComponent => props => (
//   <div className={props.className}>
//     <WrappedComponent {...props}/>
//   </div>
// );

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    tabActive: 0,
    tabContent: null,
  };

  handleChange = (event, value) => {
    this.tabCt.scrollTop = 0;
    this.setState({ tabActive: value });
  };

  render() {
    const { classes, tabs } = this.props;
    const { tabActive } = this.state;
    const TabContainer = tabs[tabActive].tabContainer;

    return tabs ? (
      <React.Fragment>
        {/* <div className={classes.root}> */}
        <AppBar
          position="fixed"
          color="default"
          classes={{
            root: classes.rootAppBar,
            positionFixed: classes.positionFixedAppBar,
          }}
        >
          <Tabs
            value={tabActive}
            onChange={this.handleChange}
            fullWidth
            scrollable
            scrollButtons="off" // auto
            classes={{
              root: classes.tabsRoot,
              indicator: classes.tabsIndicator,
            }}
          >
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                classes={{
                  root: classes.tabRoot,
                  selected: classes.tabSelected,
                  fullWidth: classes.tabFullWidth,
                  labelContainer: classes.labelContainer,
                }}
                label={tab.label}
              />
            ))}
          </Tabs>
        </AppBar>
        <div
          className={classes.tabContainer}
          ref={(DOM) => {
            this.tabCt = DOM;
          }}
        >
          <TabContainer />
        </div>
      </React.Fragment>
    ) : null;
  }
}

ScrollableTabsButtonAuto.defaultProps = {
  tabs: [
    {
      label: 'GIỚI THIỆU SÁCH',
      tabContainer: GioiThieuSach,
    },
    {
      label: 'SÁCH CÙNG TÁC GIẢ',
      tabContainer: AxiosDemo,
    },
    {
      label: 'THÔNG TIN CHI TIẾT',
      tabContainer: ThongTinChiTiet,
    },
    {
      label: 'Nhà Xuất Bản',
      tabContainer: ThongTinChiTiet,
    },
  ],
};

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
  tabs: PropTypes.array,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);
