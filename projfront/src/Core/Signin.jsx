import React, { useState } from "react";
import "./mystyle1.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Paper, LinearProgress } from "@mui/material";
import TextField from "@mui/material/TextField";
import { json, Link, Navigate } from "react-router-dom";
import abc from "./abc.jpg"
import { signinn, isAuthenticated, authenticate } from "./helper/index.js"





const Signin = () => {
        const [values, setValues] = useState({
            role: "",
            idno: "",
            password: "",
            error: "",
            loading: false,
            didRedirect: false,

        })

        const { role, idno, password, error, loading, didRedirect } = values;
        const { user } = isAuthenticated();
        const handleChange = name => event => {
            setValues({...values, error: false, [name]: event.target.value })
        }
        const handleRole = name => event => {
            if (event.target.value == "0") {
                setValues({...values, error: false, [name]: 0 })
            } else {
                setValues({...values, error: false, [name]: 1 })
            }

        }

        const onSubmit = event => {
            event.preventDefault();
            setValues({...values, error: false, loading: true });
            console.log(values)
            signinn({ role, idno, password })
                .then(data => {
                    if (data.error) {
                        setValues({...values, error: data.error, loading: false });
                        console.log(data.error)
                    } else {
                        authenticate(data, () => {
                            setValues({
                                ...values,
                                didRedirect: true
                            });
                        });
                    }
                })
                .catch(console.log("signin request failed"));

        };

        const performRedirect = () => {
            if (didRedirect) {
                if (user && user.role === 0) {
                    return <Navigate to = "/adashboard" / > ;
                } else {
                    return <Navigate to = "/userdashboard" / > ;
                }
            }
            if (isAuthenticated()) {
                return <Navigate to = "/adashboard" / > ;
            }
        };

        const loadingMessage = () => {
            return (
                loading && ( < LinearProgress / > )
            );
        };


        const errorMessage = () => {
            return (
              < div className = "row" >
                < div className = "col-md-6 offset-sm-3 text-left" >
                  < div className = "alert alert-danger"  style = {{ display: error ? "" : "none" }} > { error }
                  < /div>
                < /div >
              </div>
            );
        };

        const SForm = () => {
            return (
              < section className = "text-lg" >
                < h1 className = "text-lg-center h1 " style = {{ fontFamily: "Zen Dots", color: "#181D31", fontSize: "70px" }} >
                Leave Management System < /h1>
                < div className = "container py-4" >
                  < div className = "row g-0 align-items-center d-flex justify-content-center" >
                    < div className = "col-lg-6" >
                      < div className = "card cascading-right " style = {{background: "#d8d7d782"}} >
                        < div className = "card-body p-5 shadow-5 text-center" >
                          < h2 className = "fw-bold mb-5" style = {{ color: "#111111", fontFamily: "Zen Dots" }} >
                            Sign in now < /h2>
                          < form >
                            < div className = "form-group" >
                              < select className = "form-control mb-3 form-select" value = { role } onChange = { handleChange("role") } >
                                < option selected value = "" > Select Role < /option>
                                  < option value = "0" > HOD < /option>
                                    < option value = "1" > Employee < /option>
                              < / select >
                            < /div>
                            < div className = "form-group" >
                              < input type = "number" className = "form-control mb-3" placeholder = "ID Number" onChange = { handleChange("idno") } value = { idno } />
                            < / div >
                            < div className = "form-group" >
                              < input type = "password" className = "form-control mb-3" placeholder = "Password" onChange = { handleChange("password") } value = { password } />
                            < /div >
                            < button type = "submit" className = "btn btn-primary btn-block mb-4" onClick = { onSubmit } >
                              Sign in
                            </button>
                         < /form >
                       < /div>
                     < / div >
                   < /div>
                 < /div >
              < /div>
           < / section >
            )
        }
        
        return (
         < >
           < Paper style = {{ backgroundImage: `url(${abc})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} >
             < div className = "container m-100" > { loadingMessage() } { errorMessage() } { performRedirect() } { SForm() } < /div >
           < /Paper >
        < / > );
        };

export default Signin;
