import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment';
import { isAuthenticated } from '../widgets/helper/index.js';
import { getUsers } from "./helper/EppCall"

export default function BasicTable() {
    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);
    const [load, setload] = useState(false);
    const { user, token } = isAuthenticated();

    const loadAllUser = () => {
        getUsers().then(data => {
            console.log(data)
            if (data.error) {
                setError(data.error);
            } else {
                setUsers(data);
                setload(true);
            }
        });
    };

    useEffect(() => {
        loadAllUser();
    }, []);




    return ( <
        TableContainer component = { Paper } >
        <
        Table sx = {
            { minWidth: 650 }
        }
        ariaLabel = "simple table"
        className = 'table table-hover table-striped' >
        <
        TableHead >
        <
        TableRow >
        <
        TableCell scope = "col"
        className = ' fw-bold' > Name < /TableCell>  <
        TableCell className = ' fw-bold' > Id Number < /TableCell> <
        TableCell className = ' fw-bold' > Mobile Number < /TableCell>  <
        TableCell className = ' fw-bold' > Created on < /TableCell> < /
        TableRow > <
        /TableHead> <
        TableBody > {
            users.map((use, index) => {
                return ( <
                    TableRow key = { index }
                    sx = {
                        { '&:last-child td, &:last-child th': { border: 0 } }
                    } >
                    <
                    TableCell component = "th"
                    scope = "row" > { use.name } < /
                    TableCell > <
                    TableCell component = "th"
                    scope = "row" > { use.idno } < /
                    TableCell > <
                    TableCell component = "th"
                    scope = "row" > { use.phonenumber } < /
                    TableCell >  <
                    TableCell > { moment(use.createdAt).format('LLL') } < /TableCell>  < /
                    TableRow >
                );
            })
        }


        <
        /TableBody> < /
        Table > <
        /TableContainer>
    );
}
