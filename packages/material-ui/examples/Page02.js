import React, { Component } from 'react';
import Layout from '../src/xi-tai-01/Layout';
import Header from '../src/xi-tai-01/HeaderPrimary';
import AxiosDemo from '../../API/src/AxiosDemo';
import Filter from '../src/xi-tai-01/Filter';

export default class Page01Eg extends Component {
  state = {
    open: false,
  };

  toggleOpen = open => () => {
    this.setState({
      open,
    });
  };

  render() {
    return (
      <Layout>
        {[
          {
            key: 'header',
            component: <Header placeholder="Táo của Kimura"/>,
          },
          {
            key: 'mainct',
            component: <AxiosDemo />,
          },
          {
            key: 'floatingBottom',
            component: <Filter />,
          },
        ]}

      </Layout>
    );
  }
}
