import React from 'react'
import { Link } from "react-router-dom";

function AddLeftPanel() {

    return ( <
        div className = "card"
        style = {
            { boxShadow: '1px 2px 9px 1px #968C83' }
        } >
        <
        h4 className = "card-header bg-dark text-white" > User Navigation < /h4> <
        ul className = "list-group" >
        <
        li className = "list-group-item" >
        <
        Link to = "/userdashboard"
        className = "nav-link text-dark" > Home < /Link> < /
        li > <
        li className = "list-group-item" >
        <
        Link to = "/userdashboardd/leaves"
        className = "nav-link text-dark" > Apply Leave < /Link> < /
        li > <
        li className = "list-group-item" >
        <
        Link to = "/userdashboard/status"
        className = "nav-link text-dark" > Leave Status < /Link> < /
        li > <
        /ul> < /
        div >
    );
};

export default AddLeftPanel;