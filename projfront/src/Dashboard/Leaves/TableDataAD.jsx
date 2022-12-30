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
import { getLeavesAD } from "./helper/LeaveCall"
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export default function BasicTable() {
    const [open, setOpen] = useState(false);
    const [leaves, setLeaves] = useState([]);
    const [error, setError] = useState(false);
    const [load, setload] = useState(false);
    const { user, token } = isAuthenticated();

    const loadAllLeave = () => {
        getLeavesAD().then(data => {
            console.log(data)
            if (data.error) {
                setError(data.error);
            } else {
                setLeaves(data);
                setload(true);
            }
        });
    };

    useEffect(() => {
        loadAllLeave();
    }, []);

    const onA = () => {
        //
    }

    const nextTable = (status) => {
        if (status == "Approved") {
            return <
                span className = "badge badge-success mr-2 bg-success text-white"
            style = {
                { color: "#000000" }
            } > Approved < /span>
        } else if (status == "Denied") {
            return <
                span className = "badge badge-danger mr-2 bg-danger text-white"
            style = {
                { color: "#000000" }
            } > Denied < /span>
        }
    }

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
        TableCell className = ' fw-bold' > Type of Leave < /TableCell> <
        TableCell className = ' fw-bold' > From < /TableCell>  <
        TableCell className = ' fw-bold' > To < /TableCell> <
        TableCell className = ' fw-bold' > Status < /TableCell> < /
        TableRow > <
        /TableHead> <
        TableBody > {
            leaves.map((lea, index) => {
                return ( <
                    TableRow key = { index }
                    sx = {
                        { '&:last-child td, &:last-child th': { border: 0 } }
                    } >
                    <
                    TableCell component = "th"
                    scope = "row" > { lea.name } < /
                    TableCell > <
                    TableCell component = "th"
                    scope = "row" > { lea.idno } < /
                    TableCell > <
                    TableCell component = "th"
                    scope = "row" > { lea.type } < /
                    TableCell >
                    <
                    TableCell component = "th"
                    scope = "row" > { lea.from } < /
                    TableCell > <
                    TableCell component = "th"
                    scope = "row" > { lea.to } < /
                    TableCell > <
                    TableCell component = "th"
                    scope = "row" > {
                        nextTable(lea.status)
                    }


                    <
                    /
                    TableCell > < /
                    TableRow >
                );
            })
        } <
        /TableBody> < /
        Table > <
        /TableContainer>
    );
}