import React from 'react'
import { Card, CardHeader, Typography, CardMedia } from "@mui/material"

function SmallCard(props) {
    return ( <
        Card style = {
            { boxShadow: '1px 2px 9px 1px #555555', height: "170px", margin: "10px", borderRadius: "15px" }
        } >
        <
        div className = "d-flex flex-column justify-content-center align-items-center p-8" >
        <
        h3 style = {
            { fontFamily: "Zen Dots", color: "#181D31", padding: "10px" }
        }
        className = "text-center" > { props.title } < /h3>
        <
        h1 style = {
            { fontFamily: "Zen Dots", color: "#181D31", padding: "10px" }
        }
        className = "text-center" > { props.count } < /h1>   < /
        div > < /
        Card >
    )
}

export default SmallCard
