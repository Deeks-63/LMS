import React, { useState } from 'react'
import BigCardDep from "./BigCardDep"
import SmallCardDep from "./SmallCardDep"
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Alert, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { createDepartment } from "./helper/DepCall"
import { isAuthenticated } from "../widgets/helper/index"


function DashRghtDep() {

    const [open, setOpen] = useState(false);
    const [openSnack, setOpenSnack] = useState(false);
    const [name, setName] = useState();
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const { user, token } = isAuthenticated();

    const handleChange = (event) => {
        setError("");
        setName(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        setError("");
        setSuccess(false)

        createDepartment(user._id, token, { name })
            .then(data => {
                if (data.error) {
                    setError(true)
                } else {
                    setError(false)
                    setSuccess(true)
                    setOpenSnack(true)
                    setOpen(false)
                    setName("")

                }
            })

    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSnackClose = () => {
        setOpenSnack(false);
    };
    const action = ( <
        >
        <
        IconButton size = "small"
        ariaLabel = "close"
        color = "inherit"
        onClick = { handleSnackClose } >
        <
        CloseIcon fontSize = "small" / >
        <
        /IconButton> < / >
    );
    const SuccessMessage = () => {
        return (
            success && ( <
                Snackbar open = { openSnack }
                autoHideDuration = { 60 }
                color = "success"
                message = "Department Added Successfully"
                action = { action }
                />
            )
        );
    };


    return ( <
        div className = "Container" > <
        h1 style = {
            { fontFamily: "Fredericka the Great", color: "#181D31", padding: "10px" }
        }
        className = "text-center" > Department Section < /h1> { SuccessMessage() } <
        div >
        <
        div className = "row" > <
        Button variant = "contained"
        color = "secondary"
        onClick = { handleClickOpen }
        style = {
            { backgroundColor: "#FAEAB1" }
        } >

        <
        div className = "col-12" >
        <
        SmallCardDep / >
        <
        /div>< /Button > < /div> <
        Dialog open = { open }
        onClose = { handleClose }
        ariaLabelledby = "edit-apartment" >
        <
        DialogTitle id = "edit-apartment" > Add Department < /DialogTitle> <
        DialogContent >
        <
        DialogContentText >
        Create an Department in your organization <
        /DialogContentText>   <
        TextField autoFocus margin = "dense"
        id = "depname"
        label = "Department Name"
        type = "text"
        onChange = { handleChange }
        value = { name }
        fullWidth /
        >

        <
        /DialogContent> <
        DialogActions >
        <
        Button onClick = { handleClose }
        color = "secondary" >
        Cancel <
        /Button> <
        Button onClick = { onSubmit }
        color = "primary"
        onClose = { handleClose } >
        Submit <
        /Button> < /
        DialogActions > <
        /Dialog> < /
        div > <
        div className = "row" >
        <
        div className = "col-12" >
        <
        BigCardDep / >
        <
        /div>< /div > < /
        div >
    )
}

export default DashRghtDep