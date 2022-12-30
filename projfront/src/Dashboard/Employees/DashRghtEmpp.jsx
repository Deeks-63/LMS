import React, { useState, useEffect } from 'react'
import BigCardEmpp from "./BigCardEmpp"
import SmallCardEmpp from "./SmallCardEmpp"
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Alert, IconButton } from "@mui/material"
import { createUser } from "./helper/EppCall"
import { getDepartments } from "../Department/helper/DepCall"
import { isAuthenticated } from '../widgets/helper'
import CloseIcon from "@mui/icons-material/Close"


function DashRghtEmpp() {
    const { user, token } = isAuthenticated()
    const [open, setOpen] = useState(false);
    const [openSnack, setOpenSnack] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [values, setValues] = useState({
        name: "",
        idno: "",
        email: "",
        phonenumber: "",
        departments: [],
        department: "",
        password: "",
        loading: false,
        error: "",
        createdUser: "",
        didRedirect: false,
        success: false
    });

    const { name, idno, email, phonenumber, password, departments, department, loading, error, createdUser, didRedirect, success } = values;


    const preload = () => {
        getDepartments().then(data => {
            console.log(data);
            if (data.error) {
                setValues({...values, error: data.error });
            } else {
                setValues({...values, departments: data });
                console.log(departments);
            }
        })
    }

    useEffect(() => {
        preload();
    }, []);

    const onSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error: "", loading: true, success: true, });
        createUser(user._id, token, { name, email, password, phonenumber, idno, department }).then(data => {
            if (data.error) {
                setValues({...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: "",
                    email: "",
                    idno: "",
                    phonenumber: "",
                    department: "",
                    password: "",
                    success: false,
                    loading: false,
                    createdUser: data.name
                });
            }
        });

    };

    const handleSnackClose = () => {
        setOpenSnack(false);
    };

    const handleChange = name => event => {
        const value = name === "photo" ? event.target.files[0] : event.target.value;

        setValues({...values, [name]: value });

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
                message = "User Added Successfully"
                action = { action }
                />
            )
        );
    };


    return ( <
        div className = "Container" > { SuccessMessage() } <
        h1 style = {
            { fontFamily: "Fredericka the Great", color: "#181D31", padding: "10px" }
        }
        className = "text-center" > Employee Section < /h1>  <
        div >
        <
        div className = "row" > <
        Button variant = "contained"
        onClick = { handleClickOpen }
        style = {
            { backgroundColor: "#FAEAB1" }
        } >

        <
        div className = "col-12" >
        <
        SmallCardEmpp / >
        <
        /div>< /Button > < /div> <
        Dialog open = { open }
        onClose = { handleClose }
        ariaLabelledby = "edit-apartment" >
        <
        DialogTitle id = "edit-apartment" > Add Employee < /DialogTitle> <
        DialogContent >
        <
        DialogContentText >
        Create an Employee in your organization <
        /DialogContentText>   <
        TextField autoFocus margin = "dense"
        id = "name"
        label = "Name"
        type = "text"
        onChange = { handleChange("name") }
        value = { name }
        fullWidth /
        >
        <
        TextField autoFocus margin = "dense"
        id = "email"
        label = "Email"
        type = "email"
        onChange = { handleChange("email") }
        value = { email }
        fullWidth /
        >
        <
        TextField autoFocus margin = "dense"
        id = "idno"
        label = "ID Number"
        type = "text"
        onChange = { handleChange("idno") }
        value = { idno }
        fullWidth /
        >
        <
        TextField autoFocus margin = "dense"
        id = "phoneno"
        label = "Phone Number"
        type = "phone"
        onChange = { handleChange("phonenumber") }
        value = { phonenumber }
        fullWidth /
        >
        <
        select onChange = { handleChange("department") }
        className = "form-control"
        placeholder = "Department"
        required >
        <
        option > Select < /option> {
        departments && departments.map((dep, index) => ( <
            option key = { index }
            value = { dep._id } > { dep.name } < /option>
        ))
    } < /
    select >
        <
        TextField autoFocus margin = "dense"
    id = "password"
    label = "Password"
    type = "password"
    onChange = { handleChange("password") }
    value = { password }
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
        BigCardEmpp / >
        <
        /div>< /div > < /
    div >
)
}

export default DashRghtEmpp