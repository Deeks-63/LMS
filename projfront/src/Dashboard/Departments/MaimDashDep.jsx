import React from 'react'
import Base from "../Base"
import AddLeftPanel from "../AddLeftPanel"
import DashRightDep from "./DashRightDep"
import NavDash from "../NavDash"

function MaimDashDep() {
    return ( <
        >
        <
        NavDash / > <
        Base className = "container-fluid p-4"
        style = {
            { backgroundColor: "#FF9E9E", boxShadow: '1px 2px 9px 1px #968C83', borderRadius: "15px", height: "auto", marginBottom: "40px" }
        } >
        <
        div className = "row" >
        <
        div className = "col-3" > < AddLeftPanel / > < /div> <
        div className = "col-9" > < DashRightDep / > < /div> < /
        div > <
        /Base></ >
    )
}

export default MaimDashDep