import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import { getData as fetchApi } from '../../../utils/fetch-api';
import attachRawCss from '../../../utils/attachRawCss';
// import styleFirst from '!!raw-loader!react-table/react-table.css';
import styleFirst from '!!raw-loader!./example-01.eg.css';// eslint-disable-line

class AppComponent extends React.Component {
  state = {
    data: 0,
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetchApi({
      apiURL: 'https://jsonplaceholder.typicode.com',
      endpoint: '/comments',
    })
      .then((data) => {
        this.setState({ data });
      })
      .catch(() => this.setState({ error: true }));
  }

  render() {
    const { data } = this.state;
    return data && data.length > 0 && (
      <div style={{ padding: 20 }}>
        <p>data.length { data.length }</p>
        <br />
        <ReactTable
          data={data}
          columns={[
            {
              Header: 'id',
              accessor: 'id',
              Cell: row => (<span style={{
                flex: 1,
                textAlign: 'right',
              }}>{row.value}</span>),
              // minWidth: 400
              width: 50,
              // maxWidth: 200
            },
            {
              Header: 'Name',
              accessor: 'name',
              Cell: row => (<div style={{
                flex: 1,
                whiteSpace: 'normal',
              }}>
                <span style={{ fontWeight: 'bold', fontSize: 13 }}>{row.value}</span>
                <span style={{ fontSize: 12, display: 'block' }}>sample text</span>
              </div>),
            },
            {
              Header: 'email',
              accessor: 'email',
            },
            {
              Header: 'body',
              accessor: 'body',
            },

            {
              Header: 'BBody',
              accessor: 'body',
            },
            {
              Header: 'email',
              accessor: 'email',
            },
            {
              Header: 'body',
              accessor: 'body',
            },

            {
              Header: 'Name',
              accessor: 'name',
            },
            {
              Header: 'email',
              accessor: 'email',
            },
            {
              Header: 'body',
              accessor: 'body',
            },
          ]}
          // defaultPageSize={20}
          style={{
            height: '400px', // This will force the table body to overflow and scroll, since there is not enough room
          }}
          headerStyle={{
            paddingRight: 3,
          }}
          width={500}
          sortable={false}
          showPagination={false}
          pageSize={data.length}
          className="-striped -highlight"
        />

        <br />
        <ReactTable
          data={data}
          columns={[
            {
              Header: 'id',
              accessor: 'id',
              Cell: row => (<span style={{
                flex: 1,
                textAlign: 'right',
              }}>{row.value}</span>),
              // minWidth: 400
              width: 50,
              // maxWidth: 200
            },
            {
              Header: 'Name',
              accessor: 'name',
            },
          ]}
          // defaultPageSize={20}
          style={{
            height: '400px', // This will force the table body to overflow and scroll, since there is not enough room
          }}
          width={500}
          sortable={false}
          showPagination={false}
          pageSize={data.length}
          className="-striped -highlight"
        />


      </div>
    );
  }
}

AppComponent.propTypes = {
  classes: PropTypes.object,
};

export default attachRawCss(styleFirst, 'react-animate-on-change', AppComponent);
