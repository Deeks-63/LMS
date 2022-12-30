import express, { Router } from "express"
import { getDepartmentById, createDepartment, getDepartment, getAllDepartments, updateDepartment, deleteDepartment, countDep } from "../controllers/department.js"
import { isHA, isSignedIn, isAuthenticated } from "../controllers/auth.js"
import { getUserById } from "../controllers/user.js"


const route = express.Router();


route.param("userId", getUserById)
route.param("departmentId", getDepartmentById)


route.post("/department/create/:userId", isSignedIn, createDepartment)

route.get("/department/:departmentId", getDepartment)
route.get("/departments", getAllDepartments)

route.put("/department/:createId/:userId", isSignedIn, updateDepartment)

route.delete("/department/:departmentId/:userId", isSignedIn, deleteDepartment)
route.get("/department/count", countDep)

export default route