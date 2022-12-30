import React from 'react'
import { Card } from "@mui/material"
import TableDataL from "./TableDataL"
import TableDataAD from "./TableDataAD"

function BigCardLeave() {
    return ( <
        >
        <
        Card style = {
            { boxShadow: '1px 2px 9px 1px #555555', borderRadius: "15px", margin: "20px", paddingTop: "30px", paddingBottom: "50px" }
        } >
        <
        div className = 'row' >
        <
        h4 style = {
            { fontFamily: "Zen Dots", color: "#251749", padding: "10px" }
        }
        className = "text-center" > Pending Leaves < /h4> <
        TableDataL / >
        <
        /div>  < /
        Card >
        <
        Card style = {
            { boxShadow: '1px 2px 9px 1px #555555', borderRadius: "15px", margin: "20px", paddingTop: "30px", paddingBottom: "50px" }
        } >
        <
        div className = 'row' >
        <
        h4 style = {
            { fontFamily: "Zen Dots", color: "#251749", padding: "10px" }
        }
        className = "text-center" > All Leaves < /h4> <
        TableDataAD / >
        <
        /div> < /
        Card >
        <
        />
    )
}

export default BigCardLeave