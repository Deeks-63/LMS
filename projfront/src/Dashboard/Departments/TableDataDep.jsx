import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import { isAuthenticated } from '../widgets/helper/index.js';
import { deleteDepartment, getDepartments } from "./helper/DepCall"
import { Button } from '@mui/material';
import EditDep from "./EditDep"



export default function BasicTable() {
    const [open, setOpen] = useState(false);
    const [departments, setDepartments] = useState([]);
    const [error, setError] = useState(false);
    const [load, setload] = useState(false);
    const { user, token } = isAuthenticated();

    const loadAllDepartment = () => {
        getDepartments().then(data => {
            console.log(data)
            if (data.error) {
                setError(data.error);
            } else {
                setDepartments(data);
                setload(true);
            }
        });
    };

    useEffect(() => {
        loadAllDepartment();
    }, []);

    const onSubmit = (departmentId) => {
        deleteDepartment(departmentId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadAllDepartment();
            }
        });
    }

    const onEdit = (departmentId) => {
        //
    }


    return ( <
        TableContainer component = { Paper } > <
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
        TableCell style = {
            { fontWeight: "bold" }
        }
        scope = "col"
        className = ' fw-bold' > Department Name < /TableCell> <
        TableCell style = {
            { fontWeight: "bold" }
        }
        className = ' fw-bold' > Created On < /TableCell> <
        TableCell style = {
            { fontWeight: "bold" }
        }
        className = ' fw-bold' > Action < /TableCell> < /
        TableRow > <
        /TableHead> <
        TableBody > {
            departments.map((dee, index) => {
                return ( <
                    TableRow key = { index }
                    sx = {
                        { '&:last-child td, &:last-child th': { border: 0 } }
                    } >
                    <
                    TableCell component = "th"
                    scope = "row" > { dee.name } <
                    /TableCell> <
                    TableCell component = "th"
                    scope = "row" > { moment(dee.createdAt).format('LLL') } < /TableCell> <
                    TableCell component = "th"

                    scope = "row" > < Button color = "error"
                    variant = 'contained'
                    onClick = {
                        () => {
                            onSubmit(dee._id)
                        }
                    } > < DeleteIcon / > < /Button> < /
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