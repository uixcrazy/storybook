import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../src/xi-tai-01/Layout';
import Header from '../src/xi-tai-01/HeaderPrimary';
import AxiosDemo from '../../API/src/AxiosDemo';

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
      <Fragment>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        </Helmet>
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
          ]}

        </Layout>
      </Fragment>
    );
  }
}
