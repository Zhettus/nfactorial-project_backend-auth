import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../context/index";
import { privateRoutes, publicRoutes } from "./index";
const AppRouter = () => {
    const {isTeacher, isLoading} = useContext(AuthContext);
    console.log(isTeacher)

    return(
        isTeacher ?
            <Routes>
                {privateRoutes.map((route)=>
                    <Route 
                        exact = {route.exact} 
                        path = {route.path}
                        element={route.element}
                        key= {route.path}
                    />
                )}
            </Routes>
        : <Routes>
            {publicRoutes.map((route)=>
                <Route 
                    exact = {route.exact} 
                    path = {route.path}
                    element={route.element}
                    key= {route.path}
                />
            )}
        </Routes>
    )
}
export default AppRouter