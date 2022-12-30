import React from 'react'
import UserBase from "./UserBase"
import AddLeftPanel from "./AddLeftPanel"
import UserNavDash from "./UserNavDash"
import { isAuthenticated } from "./widgets/helper/index"

function Profile() {
    const { user: { name, email, idno, phonenumber } } = isAuthenticated();
    return ( <
        >
        <
        UserNavDash / > <
        UserBase className = "container-fluid p-4"
        style = {
            { backgroundColor: "#B4CFB0", boxShadow: '1px 2px 9px 1px #968C83', borderRadius: "15px", height: "80vh" }
        } >

        <
        div className = "row" >
        <
        div className = "col-3" > < AddLeftPanel / > < /div> <
        div className = "col-9" > <
        div className = "card mb-4" >
        <
        h4 className = "card-header" > User Profile < /h4> <
        ul className = "list-group" >
        <
        li className = "list-group-item" >
        <
        span className = "badge badge-success mr-2 bg-success" > Name: < /span> {name} < /
        li >
        <
        li className = "list-group-item" >
        <
        span className = "badge badge-success mr-2 bg-success" > ID No: < /span> {idno} < /
        li > <
        li className = "list-group-item" >
        <
        span className = "badge badge-success mr-2 bg-success" > Email: < /span> {email}  < /
        li > <
        li className = "list-group-item" >
        <
        span className = "badge badge-success mr-2 bg-success" > Phone Number: < /span> {phonenumber} < /
        li > <
        li className = "list-group-item" >
        <
        span className = "badge badge-danger bg-danger" > You are an Employee in C & D Organisation < /span> < /
        li > <
        /ul> < /
        div > < /div> < /
        div > <
        /UserBase></ >
    )
}

export default Profile