import React, { useState } from "react"
import { useFormik } from "formik";
import Portal from '../../services/portal';
import Login from "./login/Login";
import Register from "./register/Register";


export default function ({goToMain}) {
  let [authMode, setAuthMode] = useState("login")
  const changeAuthMode = () => {
    setAuthMode(authMode === "login" ? "register" : "login")
  }
  

  const[itemToDo,setItemToDo]=useState("")
  
  const handleChangeItem = (event) => { // принимает событие (автоматически) 
    setItemToDo(event.target.value); // меняет значение инпута на то что пишем
  }; 
  console.log(itemToDo) 
  

 
  const {
    register,
    handleSubmit,
  } = useFormik();


  const onSubmit = async (data) => {
    const response = await Portal.login(data);
    console.log("token ====>", response)
    localStorage.setItem('token', response.accessToken)
    localStorage.setItem('refreshToken', response.refreshToken)
    localStorage.setItem('name', JSON.stringify(response.user))
   
    
    goToMain()
  };
  

  const onRegisterSubmit = async (data) => {
    const token = await Portal.register(data)
    changeAuthMode()
    
    
  };


  if (authMode === "login") {
    return (
      <div className="Auth-form-container first" >
      <Login onSubmit={onSubmit} handleChangeItem={handleChangeItem} changeAuthMode={changeAuthMode} register={register} handleSubmit={handleSubmit}/>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <Register onSubmit={onRegisterSubmit} handleChangeItem={handleChangeItem} changeAuthMode={changeAuthMode} register={register} handleSubmit={handleSubmit}/>
    </div>
  )
}