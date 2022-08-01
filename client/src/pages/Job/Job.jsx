import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SubmitJob from '../../components/Job/SubmitJob';
import ViewJobs from '../../components/Job/ViewJobs';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body {
    background: #2C5364;
    padding: 50;
  }
`
function Job() {
    const [jobs, setJobs] = useState([]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get("http://localhost:7000/api/jobs").then((response) => {
            setJobs(response.data);
        });
    }, []);

    const onCreateClick = () => {
      axios.post("http://localhost:7000/api/jobs", {
        title, 
        description,
      }).then((response) => {
        setJobs([...jobs, response.data])
      }

      )
    }


  return (
    <>
      <GlobalStyle/>
        <div>
          <div>
            <input value={title} onChange={(event) => {
              setTitle(event.target.value)
            }} placeholder="title"/>
            <input value={description} onChange={(event) => {
              setDescription(event.target.value)
            }} placeholder="discription"/>

            <button onClick={onCreateClick}>Create</button>
          </div>
            {jobs.map((job) => (
                <div>
                    <h4>{job.title}</h4>
                    <p>{job.description}</p>
                </div>
            ))}
        </div>

    </>


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