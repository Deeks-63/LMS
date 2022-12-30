import express from "express"
import mongoose from "mongoose"
// import dotenv from "dotenv"

// //Importing Middleware
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"

// //Importing Routes
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import departmentRoute from "./routes/department.js"
import leaveRoute from "./routes/leave.js"
// import orderRoute from "./routes/order.js"


const app = express();

// DB Connections
const URL = "mongodb+srv://chahat1:1234abcd@leavems.7lsux8l.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Database Connected Successfully")
})

// //use the Middlewares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

// // My Routes
app.use("/api", authRoute)
app.use("/api", userRoute)
app.use("/api", departmentRoute)
app.use("/api", leaveRoute)
    // app.use("/api", orderRoute)



// Port running
const PORT = 8018;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})
