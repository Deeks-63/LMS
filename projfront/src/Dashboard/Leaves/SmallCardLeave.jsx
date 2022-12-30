import React from 'react'
import { Card, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import TableData from "./TableData"



function SmallCardEmpp() {
    return ( <
        Card style = {
            { boxShadow: '1px 2px 9px 1px #555555', borderRadius: "15px", margin: "20px", paddingTop: "30px", paddingBottom: "50px" }
        } >
        <
        AddIcon fontSize = "large" / >
        <
        Typography variant = "h5"
        component = "div" >
        Add Employee <
        /Typography> < /
        Card >
    )
}

export default SmallCardEmpp