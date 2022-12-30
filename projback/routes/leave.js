import express, { Router } from "express"
import { PrintRollIdLeaves,  createLeave, deleteLeave, getAllLeaves, getAllLeavesApprovedDenied, getAllLeavesPending, getLeaveCreateById, updateLeave, getLeaveById, getLeaveByRollId } from "../controllers/leave.js"
import { isSignedIn } from "../controllers/auth.js"
import { getUserById } from "../controllers/user.js"


const route = express.Router();

route.param("userId", getUserById)
route.param("lId", getLeaveCreateById)
route.param("leaveId", getLeaveById)
//Post Leave
route.post("/leaves/create", isSignedIn, createLeave)
// Get Leaves
route.get("/leaves", getAllLeaves)
route.get("/leaves/approved", getAllLeavesApprovedDenied)
route.get("/leaves/pending", getAllLeavesPending)
route.get("/leaves/:rollid", PrintRollIdLeaves )
// updateLeave
route.put("/leaves/:leaveId/:userId", isSignedIn, updateLeave)
// Delete Leave
route.delete("/leaves/:lId/:userId", isSignedIn, deleteLeave)
export default route;
