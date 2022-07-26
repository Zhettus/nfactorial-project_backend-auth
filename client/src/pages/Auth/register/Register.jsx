import "./register.css"
import React, {useState} from 'react';
import { ErrorMessage, Formik, Form, Field } from "formik";
import { Link } from 'react-router-dom';
// import {register} from "../../http/auth";
import { useNavigate } from "react-router-dom";

import Portal from "../../../services/portal";
// import {useForm} from 'react-hook-form';


function Register({logedIn=false}) {
  const navigate = useNavigate()

  const [data, setData] = useState({name: "", email: "", password: "", role: ""});

  const handleChangeItem = ({currentTarget: input}) => {
    setData({...data, [input.name]: input.value});
  };


  const handleSubmit = async (data) => {
    const token = await Portal.register(data.name, data.email, data.password, data.role).then((response) => {
      console.log("response ====>", response)
      navigate("/Teacher")
    })
  }
  

    return (
      <div className="body">
        <div className="left-register">
          <img src={'#'} alt="There is going to be something in future" className="chart" />
  
        </div>
  
        <div className="right-register">
          <div className="card-register">
            <div className="user-links">
              <div className="user-link-home">
                {!logedIn && <Link to="/">Home</Link>}
              </div>
            </div>
            <h1>Registration</h1>
            <Formik
              initialValues={{}}

            >
              <Form className="register-form" onSubmit={handleSubmit}>
  
              <div className="form-group">
                  <label form="name">User name</label>
  
                  <Field name="name" type='text' className="form-field" placeholder="Enter your user name"           
                  required
                  onChange={handleChangeItem} />
  
                  <ErrorMessage
                    component="span"
                    name="name"
                    className="form-error"
                  />
                </div>
  
                <div className="form-group">
                  <label form="email">Email</label>
  
                  <Field name="email" type='email'  className="form-field" placeholder="Enter your email" 
                   required
                  onChange={handleChangeItem}  />
  
                  <ErrorMessage
                    component="span"
                    name="email"
                    className="form-error"
                  />
                </div>
  
                <div className="form-group">
                  <label form="email">Password</label>
                  <Field name="password" type='password' className="form-field" placeholder="Enter your password"
                  required
                  onChange={handleChangeItem} />
  
                  <ErrorMessage
                    component="span"
                    name="password"
                    className="form-error"
                  />
                </div>
  
                <div className="form-grooup">
                    <label form="role">Please choose your role: </label>
                    <Field name="role" as="select" className="form-field" required onChange={handleChangeItem}>
                      <option value="red">Teacher</option>
                      <option value="green">Parent</option>
                    </Field>
                </div>
  
                <button className="button" type="submit">
                  SUBMIT
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    );
  }

export default Register

