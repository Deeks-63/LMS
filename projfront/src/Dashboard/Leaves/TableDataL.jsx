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
import { getLeavesPending, updateLeaves } from "./helper/LeaveCall"
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export default function BasicTable() {
    const [open, setOpen] = useState(false);
    const [leaves, setLeaves] = useState([]);
    const [error, setError] = useState(false);
    const [load, setload] = useState(false);
    const { user, token } = isAuthenticated();
    const [values, setValues] = useState({
      status:""
    })
    const {status} = values

    const loadAllLeave = () => {
        getLeavesPending().then(data => {
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


    const onApprove = (leaveId) => {
        // event.preventDefault();
        setValues({status: "Approved"})
        updateLeaves(leaveId, user._id, token, {status} ).then(
            data => {
                if (data.error) {
                    setError(data.error);
                } else {
                  console.log(data);
                  console.log(leaveId);
                  console.log(user._id);
                  console.log(token);
                  console.log(status);
                    loadAllLeave();
                }
            }
        );
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
            TableCell className = ' fw-bold' > from < /TableCell> <
            TableCell className = ' fw-bold' > to < /TableCell> <
            TableCell className = ' fw-bold' > Status < /TableCell> <
            TableCell className = ' fw-bold' > Applied on < /TableCell> <
            TableCell className = ' fw-bold' > Action < /TableCell> < /
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
                                TableCell >
                                <
                                TableCell component = "th"
                                scope = "row" > { lea.to } < /
                                TableCell > <
                                TableCell component = "th"
                                scope = "row" > <
                                span className = "badge badge-warning mr-2 bg-warning"
                                style = {
                                    { color: "#000000" }
                                } > { lea.status } < /span>  < /
                                TableCell > <
                                TableCell > { moment(lea.createdAt).format('LLL') } < /TableCell> <
                                TableCell > < Button variant = "contained"
                                type = "submit"
                                color = 'success' onClick={
                                  ()=>{
                                    onApprove(lea._id)
                                  }
                                } >
                                <
                                CheckIcon / > < /Button>  < Button color='error' variant = "contained" onClick = {
                                () => {
                                    onApprove(lea._id)
                                }
                            } > <
                            ClearIcon / > < /Button> </TableCell > < /
                        TableRow >
                    );
                })
        } <
        /TableBody> < /
    Table > <
        /TableContainer>
);
}
