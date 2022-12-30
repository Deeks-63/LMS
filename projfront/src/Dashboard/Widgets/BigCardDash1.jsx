import React from 'react'
import { Card, CardHeader, Typography, CardMedia } from "@mui/material"
import Stream from "../widgets/LineChart"

function BigCardDash1(props) {
    return ( <
        Card style = {
            { boxShadow: '1px 2px 9px 1px #555555', borderRadius: "15px", margin: "20px", paddingTop: "30px", paddingBottom: "50px" }
        } >
        <
        Stream / > < /
        Card >

    )
}

export default BigCardDash1