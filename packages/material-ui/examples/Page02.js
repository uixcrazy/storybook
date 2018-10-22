import React from 'react';
import Layout from '../src/xi-tai-01/Layout';
import Header from '../src/xi-tai-01/HeaderPrimary';
import AxiosDemo from '../../API/src/AxiosDemo';
import Filter from '../src/xi-tai-01/Filter';

const Page02Eg = () => (
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
export default Page02Eg;
