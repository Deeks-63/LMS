import express, { Router } from "express"
import { getUserById, createUser, getUser, deleteUser, updateUser, getAllUsers, getUserCreateById } from "../controllers/user.js"
import { isSignedIn, countUser } from "../controllers/auth.js"


const route = express.Router();

route.param("userId", getUserById)
route.param("cuId", getUserCreateById)

//create User
route.post("/user/create/:userId", isSignedIn, createUser)

// read User
route.get("/user/:cuId", getUser)
route.get("/users", getAllUsers)
route.get("/user/count", countUser)

// Update User
route.put("/user/:cuId/:userId", isSignedIn, updateUser)

// Delete User

route.delete("/user/:cuId/:userId", isSignedIn, deleteUser)
export default route;
