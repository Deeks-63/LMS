import React, { useState, useEffect } from 'react'
import BigCardStatusUser from "./BigCardStatusUser"


function DashRightUserStatus() {
    return ( <
        div className = "Container" > <
        h1 style = {
            { fontFamily: "Fredericka the Great", color: "#181D31", padding: "10px" }
        }
        className = "text-center" > Leave Status < /h1>  <
        div className = "row" >
        <
        div className = "col-12" >
        <
        BigCardStatusUser / >
        <
        /div>< /div > < /
        div >
    )
}

export default DashRightUserStatus