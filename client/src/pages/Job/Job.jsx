import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SubmitJob from '../../components/Job/SubmitJob';
import ViewJobs from '../../components/Job/ViewJobs';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #2C5364;
  }
`

function Job() {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:7000/api/jobs").then((response) => {
            setJobs(response.data);
        });
    }, []);

  return (
      <div>
          {jobs.map((job) => (
              <div>
                  <h4>{job.title}</h4>
                  <p>{job.description}</p>
              </div>
          ))}
      </div>

    // <div className="Job">
    //     <GlobalStyle />
    //   <header className="Job-header">
    //     <img src={'#'} className="Job-logo" alt="logo" />
    //     <h3>Job Board</h3>
    //   </header>
    //   <SubmitJob />
    //   <ViewJobs />
    // </div>
  );
}

export default Job;