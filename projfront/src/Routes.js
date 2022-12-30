import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./core/Home"
import Profile from "./dashboard/Profile"
import MainDashEmployee from "./dashboard/Employees/MainDashEmployee"
import MainDashDep from "./dashboard/Department/MaimDashDep"
import MainDashLeave from "./dashboard/Leaves/MainDashLeave"
import AdminDashboard from "../src/dashboard/AdminDashboard"
import SignIn from "./core/Signin"
import UserProfile from "./UserDashboard/UserProfile"
import UserDashboard from "./UserDashboard/UserDashboard"
import MainDashLeaveUser from "./UserDashboard/Leaves/MainDashLeaveUser"
import MainDashStatusUser from "./UserDashboard/Status/MainDashStatusUser"

const Routee = () => {
    return ( <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = { < SignIn / > }
        />  <
        Route path = "/adashboard"
        element = { < AdminDashboard / > }
        /> <
        Route path = "/userdashboard"
        element = { < UserDashboard / > }
        />  <
        Route path = "/admin/profile"
        element = { < Profile / > }
        />  <
        Route path = "/adashboard/employee"
        element = { < MainDashEmployee / > }
        />  <
        Route path = "/adashboard/department"
        element = { < MainDashDep / > }
        />  <
        Route path = "/adashboard/leaves"
        element = { < MainDashLeave / > }
        />  <
        Route path = "/user/profile"
        element = { < UserProfile / > }
        />   <
        Route path = "/userdashboardd/leaves"
        element = { < MainDashLeaveUser / > }
        /> <
        Route path = "/userdashboard/status"
        element = { < MainDashStatusUser / > }
        />  < /
        Routes > <
        /BrowserRouter>
    );
}

export default Routee;