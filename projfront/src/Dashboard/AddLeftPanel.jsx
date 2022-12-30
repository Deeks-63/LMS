import React from 'react'
import { Link } from "react-router-dom";

function AddLeftPanel() {

    return ( <
        div className = "card"
        style = {
            { boxShadow: '1px 2px 9px 1px #968C83' }
        } >
        <
        h4 className = "card-header bg-dark text-white" > Admin Navigation < /h4> <
        ul className = "list-group" >
        <
        li className = "list-group-item" >
        <
        Link to = "/adashboard"
        className = "nav-link text-dark" > Home < /Link> < /
        li > <
        li className = "list-group-item" >
        <
        Link to = "/adashboard/employee"
        className = "nav-link text-dark" > Employees < /Link> < /
        li > <
        li className = "list-group-item" >
        <
        Link to = "/adashboard/department"
        className = "nav-link text-dark" > Department < /Link> < /
        li > <
        li className = "list-group-item" >
        <
        Link to = "/adashboard/leaves"
        className = "nav-link text-dark" > Leaves < /Link> < /
        li > <
        /ul> < /
        div >
    );
};

export default AddLeftPanel;