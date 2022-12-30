import SmallCard from "./widgets/SmallCard"
import BigCardDash1 from "./widgets/BigCardDash1"
import {useEffect, useState} from "react"
import {getUsers} from "./Employees/helper/EppCall"
import {getLeavesByRollId} from "../UserDashboard/Status/helper/index"
import {getDepartments} from "./Department/helper/DepCall"

function AddRightPanel() {
  const [leaves, setLeaves] = useState([]);
  const [users, setUsers] = useState([]);
  const [department, setDepartment] = useState([]);
  const [leavecount, setLeavecount] = useState("");
  const [usercount, setUsercount] = useState("");
  const [departmentcount, setDepartmentcount] = useState("");
  const [error, setError] = useState(false)
  const [load, setload] = useState(false)

  const loadLeaves = () => {
      getLeavesByRollId().then(data => {
          if (data.error) {
              setError(data.error);
          } else {
              setLeaves(data);
              setload(true);
              console.log(data)
              setLeavecount(data.length)
          }
      });
  };
  const loadDepartments = () => {
      getDepartments().then(data => {
          if (data.error) {
              setError(data.error);
          } else {
              setLeaves(data);
              setload(true);
              console.log(data)
              console.log(data.length)
              setDepartmentcount(data.length)
          }
      });
  };
  const loadUsers = () => {
      getUsers().then(data => {
          if (data.error) {
              setError(data.error);
          } else {
              setLeaves(data);
              setload(true);
              console.log(data)
              console.log(data.length)
              setUsercount(data.length)
          }
      });
  };

  useEffect(() => {
      loadDepartments();
      loadUsers();
      loadLeaves();
  }, []);

    return ( <
        div className = "Container" >
        <
        div className = "row" >
        <
        div className = "col-4" > < SmallCard price = "1"
        title = "Employees" count={usercount}
        style = {
            { fontFamily: "Fredericka the Great", color: "#181D31", padding: "10px" }
        }
        className = "text-center" / > < /div> <
        div className = "col-4" > < SmallCard price = "2"
        title = "Department" count={departmentcount} / > < /div> <
        div className = "col-4" > < SmallCard price = "3"
        title = "Leaves" count={leavecount} / > < /div> < /
        div > <
        div className = "row" >
        <
        div className = "col-12" >
        <
        BigCardDash1 price = "1"
        title = "hii" / >
        <
        /div>< /div > < /
        div >
    )

}

export default AddRightPanel
