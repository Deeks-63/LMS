import React from 'react'
import Base from "./Base"
import AddLeftPanel from "./AddLeftPanel"
import NavDash from "./NavDash"
import { isAuthenticated } from "./widgets/helper/index"

function Profile() {
    const { user: { name, email, idno, phonenumber } } = isAuthenticated();
    return ( <
        >
        <
        NavDash / > <
        Base className = "container-fluid p-4"
        style = {
            { backgroundColor: "#FF9E9E", boxShadow: '1px 2px 9px 1px #968C83', borderRadius: "15px", height: "80vh" }
        } >

        <
        div className = "row" >
        <
        div className = "col-3" > < AddLeftPanel / > < /div> <
        div className = "col-9" > <
        div className = "card mb-4" >
        <
        h4 className = "card-header" > Admin Profile < /h4> <
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
        span className = "badge badge-danger bg-danger" > You are an Administrator < /span> < /
        li > <
        /ul> < /
        div > < /div> < /
        div > <
        /Base></ >
    )
}

export default Profile