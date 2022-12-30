import React, { useState } from 'react'
import { TextField, Select, MenuItem, FormControl, InputLabel, Button, Snackbar, IconButton } from "@mui/material"
import { isAuthenticated } from "../../dashboard/widgets/helper/index"
import { createLeave } from "./helper/LeaveCall"
import CloseIcon from "@mui/icons-material/Close"

function ApplyForm() {
    // const { user: { name, email, idno, department } } = isAuthenticated();
    const [openSnack, setOpenSnack] = useState(false);
    const { user, token } = isAuthenticated()
    const [values, setValues] = useState({
        name: "",
        idno:"",
        from: "",
        to: "",
        comments: "",
        type: "",
        loading: false,
        error: "",
        createdLeave: "",
        didRedirect: false,
        success: false
    });

    const {  name, idno, from, to, type, comments, loading, error, createdLeave, didRedirect, success } = values;

    const onSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error: "", loading: true, success: true, });
        createLeave(user._id, token, { name: user.name,  idno : user.idno, from, to, type, comments }).then(data => {
            if (data.error) {
                setValues({...values, error: data.error });
            } else {
                setOpenSnack(true)
                setValues({
                    ...values,
                    from:"",
                    to:"",
                    comments:"",
                    type:"",
                    success: true,
                    loading: false,
                    createdUser: data.name
                })

            }
        });

    };

    const handleChange = name => event => {
        const value = event.target.value;
        setValues({...values, [name]: value });
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
                message = "Leave Applied Successfully"
                action = { action } /
                >
            )
        );
    };

    return ( < > { SuccessMessage() } < div style = {
            { margin: "auto" }
        } > <
        div style = {
            { margin: "auto" }
        } > <
        TextField id = "outlined"
        label = "From"
        placeholder = 'DD/MM/YYYY'
        id = "margin-none"
        onChange = { handleChange("from") }
        value = { from }
        style = {
            { width: "50%", margin: "10px" }
        }
        / >  <
        TextField id = "outlined"
        label = "To"
        placeholder = 'DD/MM/YYYY'
        onChange = { handleChange("to") }
        value = { to }
        id = "margin-none"
        style = {
            { width: "50%", margin: "10px" }
        }
        / >
        <
        select onChange = { handleChange("type") }
        className = "form-control"
        placeholder = "Type"
        required style = {
            { width: "50%", margin: "10px" }
        }>
        <
        option > Select Type < /option>
        <option value = { "Sick" } > Sick < /option>
        <option  value = { "Short" } > Short < /option>
        <option  value = { "Planned" } > Planned< /option>
        <option  value = { "Privillage" } > Privillage < /option>
             < / select >

        <
        TextField id = "outlined"
        label = "Comments"
        id = "margin-none"
        onChange = { handleChange("comments") }
        value = { comments }
        style = {
            { width: "50%", margin: "10px" }
        }
        / >  <
        Button variant = "contained"
        onClick = { onSubmit }
        style = {
            { width: "50%", margin: "10px" }
        } > Contained < /Button> < /
        div > <
        /div></ >
    )
}

export default ApplyForm
