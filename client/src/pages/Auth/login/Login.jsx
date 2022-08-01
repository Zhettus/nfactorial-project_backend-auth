import "./login.css"
import { ErrorMessage, Formik, Form, Field } from "formik";
// import Img from "../Assets/result.svg"
import { Link } from 'react-router-dom';
// import {login} from '../../http/index';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Portal from "../../../services/portal";



function Login({logado=false}) {
  const navigate = useNavigate()

  const[itemToDo,setItemToDo]=useState("")
  
  const handleChangeItem = (event) => { // принимает событие (автоматически) 
    setItemToDo(event.target.value); // меняет значение инпута на то что пишем
  }; 
  console.log(itemToDo) 

  // const [data, setData] = useState({name: "", email: "", password: ""});

  // const handleChangeItem = ({currentTarget: input}) => {
  //   setData({...data, [input.name]: input.value});
  // };


  // const handleSubmit = (e) => {
  //   // e.preventDefault();
  //   login(data.name, data.email, data.password).then((response) => {
  //     console.log("response ====>", response)
  //     navigate("/Teacher")
  //   })
  // }

  const handleSubmit = async (data) => {
    const response = await Portal.login(data);
    console.log("token ====>", response)
    // localStorage.setItem('token', response.accessToken)
    // localStorage.setItem('refreshToken', response.refreshToken)
    // localStorage.setItem('name', JSON.stringify(response.user))
    

    navigate("/Teacher")
  };
 
  return (
    <div className="body">
      <div className="left-login">
        <img src={'#'} alt="Pessoas olhando gráficos" className="chart" />

      </div>

      <div className="right-login">
        <div className="card-login">
          <div className="user-links">
            <div className="user-link-home">
              {!logado && <Link to="/">Home</Link>}
            </div>

            <div className="user-link-cad">
              {!logado && <Link to="/Register">Registration</Link>}
            </div>
          </div>
          <h1>LOGIN</h1>
          <Formik
            initialValues={{}}
            onSubmit={handleSubmit}
          >
            <Form className="login-form">
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
              <button className="button" type="submit">
                LOG IN
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;

// import { useRef, useState, useEffect, useContext } from 'react';
// import {login} from '../../http/index';
// import { useNavigate } from 'react-router-dom';

// const LOGIN_URL = '/auth';

// const Login = () => {
//     const navigate = useNavigate()
//     const [data, setData] = useState({user: "", email: "", password: ""});


//     const handleChange = ({currentTarget: input}) => {
//         setData({...data, [input.name]: input.value});
//     }


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         Login(data.email, data.password).then((response) => {
//             console.log("response =====>", response)
//             navigate("/")
//         });
//     };
    
 
//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">Username:</label>
//                 <input
//                     type="text"
//                     id="username"
//                     autoComplete="off"
//                     onChange={handleChange}
//                     value={data.user}
//                     required />


//                 <label htmlFor='email'>Email:</label>
//                 <input
//                     type="email"
//                     id="email"
//                     value={data.email}
//                     onChange={handleChange}
//                     required

//                 />

//                 <label htmlFor="password">Password:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     onChange={handleChange}
//                     value={data.password}
//                     required
//                     />
//                         <button>Sign In</button>
//             </form>
//                     <p>
//                         Need an Account?<br />
//                         <span className="line">
//                             {/*put router link here*/}
//                             <a href="#">Sign Up</a>
//                         </span>
//                     </p></>


//             )}
   

// export default Login