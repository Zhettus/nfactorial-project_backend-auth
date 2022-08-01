import Login from "../pages/Login";
import Home from '../pages/homepage/Home';
import Login from '../pages/Auth/login/Login';
import Register from '../pages/Auth/register/Register';
import Teacher from '../pages/teacher/Teacher';
import Parent from '../pages/parent/Parent';
import { Component } from "react";
import { HOME_ROUTE, LOGIN_ROUTE, PARENT_ROUTE, REGISTER_ROUTE, TEACHER_ROUTE } from "../utils/consts";


export const privateRoutes = [
    {
        path: TEACHER_ROUTE,
        Component: Teacher
    },
    {
        path: PARENT_ROUTE,
        Component: Parent
    }

]
export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTER_ROUTE,
        Component: Register
    },


]