import React, {useState, useEffect} from 'react'
import { Card, Typography, TextField, Button } from "@mui/material"
import {getLeavesByRollId, getLeavesById} from "./helper/index"
import moment from 'moment';
import { isAuthenticated } from '../../dashboard/widgets/helper/index.js';


function BigCardStatusUser() {
  const [leaves, setLeaves] = useState([]);
  const { user, token } = isAuthenticated();
  const [error, setError] = useState(false);
  const [load, setload] = useState(false);
  const loadAllLeavesById = () => {
      getLeavesById(user.idno).then(data => {
          if (data.error) {
              setError(data.error);
          } else {
              setLeaves(data);
              setload(true);
              console.log(data)
              console.log(data.length)
          }
      });
  };

  useEffect(() => {
      loadAllLeavesById();
  }, []);
    return ( <
        >
        <
        div >
        < div className = 'row' >
{
  leaves.map((lee)=>{
    return(
      <
      div className = 'col-4' > <
      Card style = {
          { padding: "10px", margin:"10px" }
      } > < Typography variant = "h4"
      component = "div" >
      Leave Details <
      div >
      <
      ul >
      <
      li > < h6 > Applied on: {moment(lee.createdAt).format('LLL') } < /h6></li >
      <
      li > < h6 > From:  { lee.from } < /h6></li >
      <
      li > < h6 > To: { lee.to } < /h6></li >
      <
      li > < h6 > Type: { lee.type }< /h6></li >
      <
      li ><h6>Status: <
      span className = "badge badge-danger bg-danger" > {lee.status} < /span></h6></li >
      <
      /ul>

      <
      /div> < /
      Typography > < /Card >  < /
      div >
    )
  })
}
         <
        /div>< /div > <
        />
    )
}

export default BigCardStatusUser
