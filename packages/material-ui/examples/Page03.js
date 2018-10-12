import React, { Component } from 'react';
import Layout from '../src/xi-tai-01/Layout';
import Header from '../src/xi-tai-01/HeaderPrimary';
import AxiosDemo from '../../API/src/AxiosDemo';
import FixedBottom from './page01/FixedBottom';

const HelloWorld = ({ name }) => (
  <div>
    {`Hi ${name}`}
    <Header placeholder="Táo của Kimura"/>

  </div>
);

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
            component: <Header />,
          },
          {
            key: 'mainct',
            component: <AxiosDemo />,
          },
          {
            key: 'fixedBottom',
            component: <FixedBottom />,
          },
        ]}

      </Layout>
    );
  }
}
