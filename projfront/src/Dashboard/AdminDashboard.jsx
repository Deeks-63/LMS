import React from "react";
import Base from "./Base"
import AddLeftPanel from "./AddLeftPanel"
import AddRightPanel from "./AddRightPanel"

import NavDash from "./NavDash"

const AdminDashboard = () => {

    return ( < > <
        NavDash / > <
        Base className = "container-fluid p-4"
        style = {
            { backgroundColor: "#FF9E9E", boxShadow: '1px 2px 9px 1px #434242', borderRadius: "15px", height: "auto", marginBottom: "40px" }
        } >

        <
        div className = "row" >
        <
        div className = "col-3" > < AddLeftPanel / > < /div> <
        div className = "col-9" > < AddRightPanel / > < /div> < /
        div > <
        /Base></ >
    );
};

export default AdminDashboard;