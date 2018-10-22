import React from 'react';
import Layout from '../src/xi-tai-01/Layout';
import Header from '../src/xi-tai-01/HeaderSecondary';
import DetailTabs from '../src/xi-tai-01/DetailTabs';
import AxiosDemo from '../../API/src/AxiosDemo';
import FixedBottom from './page03/FixedBottom';

const Page03Eg = () => (
  <Layout>
    {[
      {
        key: 'header',
        component: <Header />,
      },
      {
        key: 'mainct',
        component: <DetailTabs />,
      },
      {
        key: 'fixedBottom',
        component: <FixedBottom />,
      },
    ]}
  </Layout>
);
export default Page03Eg;
