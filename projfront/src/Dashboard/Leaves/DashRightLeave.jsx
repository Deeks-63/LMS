import React, { useState, useEffect } from 'react'
import BigCardLeave from "./BigCardLeave"


function DashRightLeave() {
    return ( <
        div className = "Container" > <
        h1 style = {
            { fontFamily: "Fredericka the Great", color: "#181D31", padding: "10px" }
        }
        className = "text-center" > Leave Section < /h1>  <
        div className = "row" >
        <
        div className = "col-12" >
        <
        BigCardLeave / >
        <
        /div>< /div > < /
        div >
    )
}

export default DashRightLeave