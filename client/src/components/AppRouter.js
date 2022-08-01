import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../context/index";
import { privateRoutes, publicRoutes } from "../router/index";


const AppRouter = () => {

    const isAuth = false

    return(
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) => 
                <Route path={path} component={Component} exact/>
            )}
            {publicRoutes && authRoutes.map(({path, Component}) => 
                <Route path={path} component={Component} exact/>
            )}
        </Routes>
    )
}
export default AppRouter