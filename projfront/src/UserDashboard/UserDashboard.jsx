import React from "react";
import UserBase from "./UserBase"
import AddLeftPanel from "./AddLeftPanel"
import AddRightPanel from "./AddRightPanel"
import UserNavDash from "./UserNavDash"

const UserDashboard = () => {

    return ( < > <
        UserNavDash / > <
        UserBase className = "container-fluid p-4"
        style = {
            { backgroundColor: "#B4CFB0", boxShadow: '1px 2px 9px 1px #434242', borderRadius: "15px", height: "auto", marginBottom: "40px" }
        } >

        <
        div className = "row" >
        <
        div className = "col-3" > < AddLeftPanel / > < /div> <
        div className = "col-9" > < AddRightPanel / > < /div> < /
        div > <
        /UserBase></ >
    );
};

export default UserDashboard;