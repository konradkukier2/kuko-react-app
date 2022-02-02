import logo from './logo.svg';
import './App.css';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
// import API from '@aws-amplify/api';

import { getTenantWithLicensesAndJobs } from './graphql/custom';

function App() {
  const tenantId = '052cd011-261f-4153-a38a-21de450ddb33';
  const { loading, error, data } = useQuery(gql`${getTenantWithLicensesAndJobs}`, {
    variables: {
      id: tenantId,
      limit: 9000,
    },
    authMode: 'API_KEY',
  });



  loading && console.log('loading..', loading);
  error && console.log('error..', error);
  data && console.log('data..', data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
