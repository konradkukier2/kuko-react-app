import './App.css';
import { useState } from 'react';
import API from '@aws-amplify/api';

import { getJob as getJobQuery } from './graphql/custom';
import { verifyRegistrationCode } from './graphql/queries';

function App() {
  const CODE = '2UFQ-M3D9';
  const JOB_ID = '71299e30-036a-48ae-9da7-499af5864ee9';
  const [code, setCode] = useState(CODE);
  const [jobId, setJobId] = useState(JOB_ID);
  const [cloudResponse, setCloudResponse] = useState(null);

  const getJob = (id) => {
    setCloudResponse(null);
    return API.graphql({
      query: getJobQuery,
      variables: { id },
      authMode: 'API_KEY',
    })
    .then(response => {
      console.log('[getJob] response', response);
      setCloudResponse(JSON.stringify(response.data.getJob, null, 2));
    })
    .catch(error => {
      console.log('[getJob] error', error);
    });
  }

  const verifyCode = (code) => {
    setCloudResponse(null);
    return API.graphql({
      query: verifyRegistrationCode,
      variables: {
        registrationCode: code,
      },
      authMode: 'API_KEY',
    })
    .then(response => {
      console.log('[verifyCode] response', response);
      setCloudResponse(JSON.stringify(JSON.parse(response.data.verifyRegistrationCode), null, 2));
    })
    .catch(error => {
      console.log('[verifyCode] error', error);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input value={jobId} style={inputStyle} onChange={(e) => setJobId(e.target.value)}></input>
          <button style={buttonStyle} onClick={() => getJob(jobId)}>GET JOB BY ID (GraphQL)</button>
        </div>

        <div style={{ marginLeft: 22 }}>
          <input value={code} style={inputStyle} onChange={(e) => setCode(e.target.value)}></input>
          <button style={buttonStyle} onClick={() => verifyCode(code)}>VERIFY CODE (AWS Lambda)</button>
        </div>

        {
          cloudResponse && (
          <div>
            <p>Server response:</p>
            <pre style={responseStyle}>{cloudResponse}</pre>
          </div>
          )
        }

      </header>
    </div>
  );
}

const inputStyle = { padding: 6, margin: 4, minWidth: 256, height: 24 };
const buttonStyle = { padding: 10, marginLeft: 18 };
const responseStyle = { textAlign: 'left' };

export default App;
