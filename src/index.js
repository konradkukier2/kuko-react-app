import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Amplify from 'aws-amplify';
import reportWebVitals from './reportWebVitals';
import { client } from './graphql/client';
import { ApolloProvider } from 'react-apollo';
import { awsConfig } from './aws.config';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';

Amplify.configure(awsConfig);

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <App />
      </ApolloHooksProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
