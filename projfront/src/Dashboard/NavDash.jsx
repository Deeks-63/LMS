import React from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Typography
} from "@mui/material";
// import { makestyles } from "@mui/styles"
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { isAuthenticated } from "./widgets/helper";
import { signout } from "../core/helper/index"
import logo from "./logo1.png"
// import { style } from "@mui/system";

// const useStyles = makeStyles({
//     component: {
//         backgroundColor: "#FBF8F1",
//         height: "auto"
//     },
//     headerBar: {
//         backgroundColor: "#16003B",
//         height: 60,
//         position: "static"
//     },
//     tabs: {
//         color: "#FFFFFF",
//         textDecoration: "none",
//         marginRight: 20,
//         fontSize: 20
//     }
// });

const Navbar = () => {
    // const classname = useStyles();
    return ( < Box style = {
            {
                backgroundColor: "#FBF8F1",
                height: "auto"
            }
        } >
        <
        AppBar position = "static"
        style = {
            {
                backgroundColor: "#16003B",
                height: 60,
                position: "static"
            }
        } >
        <
        Toolbar style = {
            { marginLeft: "auto" }
        } >

        {
            (isAuthenticated() && ( <
                Link onClick = {
                    () => {

                        window.location.reload(false);

                        signout();
                    }
                }
                to = "/"
                className = "nav-link text-dark"
                style = {
                    {
                        color: "#FFFFFF",
                        textDecoration: "none",
                        marginRight: 25,
                        fontSize: 15
                    }
                } > <
                LogoutIcon sx = {
                    { fontSize: 30, color: "#FFFFFF", }
                }
                / > < /Link >
            ))
        }

        <
        Link to = "/admin/profile"
        className = "nav-link text-dark"
        style = {
            {
                color: "#FFFFFF",
                textDecoration: "none",
                marginRight: 25,
                fontSize: 15
            }
        } > <
        AccountCircleIcon sx = {
            { fontSize: 30, color: "#FFFFFF", }
        }
        / > < /Link >
        <
        /
        Toolbar > <
        /AppBar> < /
        Box >
    );
};

export default Navbar;